import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class OfferDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  requirements: string;

  @IsString()
  @IsNotEmpty()
  thumbnail: string;

  @IsString()
  @IsNotEmpty()
  boxSize: string;

  @IsBoolean()
  @IsOptional()
  isDesktop?: boolean;

  @IsBoolean()
  @IsOptional()
  isAndroid?: boolean;

  @IsBoolean()
  @IsOptional()
  isIos?: boolean;

  @IsString()
  @IsOptional()
  offerUrlTemplate?: string;

  @IsString()
  @IsOptional()
  providerName?: string;

  @IsString()
  @IsOptional()
  externalOfferId?: string;
}
