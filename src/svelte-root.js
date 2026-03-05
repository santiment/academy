import { useDeviceCtx } from 'san-webkit-next/ctx/device'
import { useUiCtx } from 'san-webkit-next/ctx/ui'
import { useAIChatbotCtx } from 'san-webkit-next/ui/app/AIChatbot'

useDeviceCtx()
useUiCtx()
useAIChatbotCtx({ type: 'ACADEMY_QA' })
