import { ExecutionContext, SetMetadata, createParamDecorator } from '@nestjs/common'

import { IS_PUBLIC_KEY } from '@/services/auth/jwt-auth-guard.service'

export function Public() {
  return SetMetadata(IS_PUBLIC_KEY, true)
}

/** 获取 JWT 中的用户对象 */
export const UserInfo = createParamDecorator((_data, req: ExecutionContext) => {
  return req.switchToHttp().getRequest().user
})

/** 获取用户 ID */
export const UserId = createParamDecorator((_data, req: ExecutionContext) => {
  return req.switchToHttp().getRequest().user?.id
})