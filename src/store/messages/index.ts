import { Message, ERROR_MESSAGE, SUCCESS_MESSAGE, WARNING_MESSAGE, INFO_MESSAGE } from '@/types/messages'

export const messagesModule = {
  state: {
    messages: [],
  },
  getters: {
    hasMessages: (state: any) => {
      return state.messages.length > 0
    },
    messages: (state: any) => {
      return state.messages
    },
  },
  mutations: {
    addMessage(state: any, message: Message) {
      state.messages.push(message)
    },
    popLastMessage(state: any) {
      if (state.messages.length) {
        state.messages.splice(0, 1)
      }
    },
  },
  actions: {
    addMessage(context: any, message: Message) {
      context.commit('addMessage', message)
      setTimeout(
        () => {
          context.commit('popLastMessage')
        }, 5000
      )
    },
    addError(context: any, text: string) {
      context.dispatch('addMessage', new Message(ERROR_MESSAGE, text))
    },
    addWarning(context: any, text: string) {
      context.dispatch('addMessage', new Message(WARNING_MESSAGE, text))
    },
    addSuccess(context: any, text: string) {
      context.dispatch('addMessage', new Message(SUCCESS_MESSAGE, text))
    },
    addInfo(context: any, text: string) {
      context.dispatch('addMessage', new Message(INFO_MESSAGE, text))
    },
  },
  modules: {
  },
}

export default messagesModule
