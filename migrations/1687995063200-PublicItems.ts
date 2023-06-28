import { Logger } from '@nestjs/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class PublicItems1687995063200 implements MigrationInterface {
  private readonly logger = new Logger(PublicItems1687995063200.name);
  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('Up');
    await queryRunner.query('UPDATE item SET public = 1');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('Down');
  }
}
