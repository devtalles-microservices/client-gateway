import { Module } from '@nestjs/common';
import { NastModule } from 'src/transports/nast.module';
import { ProductsController } from './products.controller';

@Module({
  imports: [NastModule],
  controllers: [ProductsController],
  providers: [],
})
export class ProductsModule {}
