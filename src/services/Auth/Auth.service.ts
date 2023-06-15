import { IUser } from '../../interfaces/User.interface'

class AuthService {
  user$: IUser | null = null

  login() {}

  logout() {
    this.user$ = null
  }
}

export const authService = new AuthService()
