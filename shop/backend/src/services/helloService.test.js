import { helloService } from './userService';

test('getHelloWorld', async () => {
  let result = await helloService.getHelloWorld();

  expect(result.message).toEqual('Hello World!');
});
