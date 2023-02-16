import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from './offer.entity';
import { OfferDto } from './offer.dto';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(Offer)
    private readonly offerRepository: Repository<Offer>,
  ) {}

  async createOffer(offerDto: OfferDto): Promise<Offer> {
    const offer = this.offerRepository.create(offerDto);
    return this.offerRepository.save(offer);
  }
}
