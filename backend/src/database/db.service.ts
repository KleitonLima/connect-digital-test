import { Injectable } from '@nestjs/common';
import { AppDataSource } from './typeorm.db';
import { QueryRunner } from 'typeorm';

@Injectable()
export class DatabaseService {
  queryRunner(): QueryRunner {
    return AppDataSource.createQueryRunner();
  }

  async injectQueryRunner(): Promise<QueryRunner> {
    const queryRunner = this.queryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    return queryRunner;
  }

  async commitTransaction(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.commitTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async rollbackTransaction(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.rollbackTransaction();
    } catch (rollbackError) {
      console.error('Erro durante rollback:', rollbackError);
    } finally {
      await queryRunner.release();
    }
  }
}
