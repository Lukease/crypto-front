export class CurrentSession {
  private activeToken: string
  private validUtil: Date

  constructor(activeToken: string, validUtil: Date) {
    this.activeToken = activeToken
    this.validUtil = validUtil
  }
}