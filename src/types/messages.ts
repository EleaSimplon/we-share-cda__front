import { getLocalId } from '@/utils/random'

export const ERROR_MESSAGE = 1
export const WARNING_MESSAGE = 2
export const SUCCESS_MESSAGE = 3
export const INFO_MESSAGE = 4

export class Message {
  public id: string
  constructor(
    public level: number,
    public text: string
  ) {
    this.id = getLocalId()
  }

  public levelName(): string {
    switch (this.level) {
      case ERROR_MESSAGE: return 'error'
      case WARNING_MESSAGE: return 'warning'
      case SUCCESS_MESSAGE: return 'success'
      case INFO_MESSAGE: return 'info'
    }
    return ''
  }
}