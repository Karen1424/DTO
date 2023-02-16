import { IsBoolean, IsDefined, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class OfferDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsString()
  slug: string;

  @IsDefined()
  @IsString()
  description: string;

  @IsDefined()
  @IsString()
  requirements: string;

  @IsDefined()
  @IsString()
  thumbnail: string;

  @IsDefined()
  @IsEnum(['large', 'small'])
  @Transform(({ value }) => value === 'large' ? 'LARGE' : 'SMALL')
  boxSize: string;

  @IsDefined()
  @IsBoolean()
  @Transform(({ value }) => !!value)
  isDesktop: boolean;

  @IsDefined()
  @IsBoolean()
  @Transform(({ value }) => !!value)
  isAndroid: boolean;

  @IsDefined()
  @IsBoolean()
  @Transform(({ value }) => !!value)
  isIos: boolean;

  @IsDefined()
  @IsString()
  offerUrlTemplate: string;

  @IsOptional()
  @IsString()
  providerName?: string;

  @IsOptional()
  @IsString()
  externalOfferId?: string;

  static fromPayload1(payload: any): OfferDto {
    const { data } = payload;
    const { Offer } = data['15828'];
    const { name, tracking_url, instructions, description } = Offer;
    const { android, ios, web } = Offer.OS;

    return new OfferDto({
      name,
      slug: Offer.campaign_vertical,
      description,
      requirements: instructions,
      thumbnail: Offer.icon,
      boxSize: 'SMALL',
      isDesktop: web,
      isAndroid: android,
      isIos: ios,
      offerUrlTemplate: tracking_url,
      externalOfferId: String(Offer.campaign_id),
    });
  }

  static fromPayload2(payload: any): OfferDto[] {
    const offers = payload.offers.map((offer: any) => {
      const { name, requirements, desc, thumbnail, boxSize, isDesktop, isAndroid, isIos, url, extId } = offer;

      return new OfferDto({
        name,
        slug: offer.offer_id,
        description: desc,
        requirements,
        thumbnail,
        boxSize: boxSize === 'Large' ? 'LARGE' : 'SMALL',
        isDesktop,
        isAndroid,
        isIos,
        offerUrlTemplate: url,
        externalOfferId: String(extId),
      });
    });

    return offers;
  }

  constructor(partial: Partial<OfferDto>) {
    Object.assign(this, partial);
  }
}
