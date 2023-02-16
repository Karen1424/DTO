import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from './offer.entity';
import { transformOfferFromExternal } from './offer.utils';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(Offer)
    private offerRepository: Repository<Offer>,
  ) {}

  async create(externalOfferId: string, providerName: string) {
    const existingOffer = await this.offerRepository.findOne({ where: { externalOfferId } });
    if (existingOffer) {
      return existingOffer;
    }

    const externalOffer = await this.getOfferFromExternalApi(externalOfferId, providerName);
    if (!externalOffer) {
      throw new Error(`Offer with external id ${externalOfferId} not found in provider ${providerName}`);
    }

    const offer = transformOfferFromExternal(externalOffer, providerName);
    return this.offerRepository.save(offer);
  }

  async findAll() {
    return this.offerRepository.find();
  }

  async findOne(id: number) {
    return this.offerRepository.findOne(id);
  }

  private async getOfferFromExternalApi(externalOfferId: string, providerName: string) {
    // TODO: implement logic to get the offer from the external API
    return null;
  }
}
