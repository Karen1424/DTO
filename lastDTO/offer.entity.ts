import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('offers')
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  slug: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  requirements: string;

  @Column({ type: 'varchar', length: 255 })
  thumbnail: string;

  @Column({ type: 'enum', enum: ['large', 'small'], name: 'box_size' })
  boxSize: string;

  @Column({ type: 'boolean', default: false, name: 'is_desktop' })
  isDesktop: boolean;

  @Column({ type: 'boolean', default: false, name: 'is_android' })
  isAndroid: boolean;

  @Column({ type: 'boolean', default: false, name: 'is_ios' })
  isIos: boolean;

  @Column({ type: 'varchar', length: 256, name: 'offer_url_template' })
  offerUrlTemplate: string;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'provider_name' })
  providerName: string;

  @Column({ type: 'varchar', length: 255, name: 'external_offer_id', nullable: true })
  externalOfferId: string;
}
