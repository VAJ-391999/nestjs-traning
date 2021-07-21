import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOkResponse, ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { ProductEntity } from './entities/product.entity';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiCreatedResponse({type: ProductEntity})
  async create(@Body() createProductDto: CreateProductDto) {
    return new ProductEntity(await this.productsService.create(createProductDto));
  }

  @Get()
  @ApiOkResponse({type: ProductEntity, isArray: true})
  async findAll() {
    const products = await this.productsService.findAll()
    return products.map((product) => new ProductEntity(product));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await new ProductEntity(await this.productsService.findOne(id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return await new ProductEntity(await this.productsService.update(id, updateProductDto));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
