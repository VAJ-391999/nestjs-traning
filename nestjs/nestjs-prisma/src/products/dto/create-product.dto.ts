import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, MaxLength, Min, MinLength } from 'class-validator'

export class CreateProductDto {
    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty()
    name: string;

    @MaxLength(150)
    @IsOptional()
    @ApiProperty({required: false})
    description?: string;

    @ApiProperty()
    @Min(1.0)
    price: number;

    @IsNotEmpty()
    @MinLength(5)
    @ApiProperty()
    sku: string;

    @ApiProperty({required: false})
    published: boolean
}
