import { CurrentUser } from './../auth/decorators/current-user.decorator';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { OrderModel } from './models/order.model';
import type { OrderCreateInput } from './inputs/order.input';

@Resolver()
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query(() => [OrderModel], {
      name: 'myOrders',
    })
    @Auth()
    getAllByUserId(
      @CurrentUser('id') userId: string,
    ) {
      return this.ordersService.getAllByUserId(userId);
    }

  @Query(() => OrderModel)
    @Auth()
    createOrder(
      @CurrentUser('id') userId: string,
      @Args('input') input: OrderCreateInput,
    ) {
      return this.ordersService.makeOrder(userId, input);
    }
  
}
