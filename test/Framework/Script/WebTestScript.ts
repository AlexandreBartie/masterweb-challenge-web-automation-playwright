import { Page } from 'playwright-core'
import { WebTestPage } from './WebTestPage'
import { TestCases } from '../Design/TestCase'
import { DataFlowType, TestData } from '../Design/TestData'

export class WebTestScript<P extends WebTestPage, D extends TestData> {
  name: string
  local: P
  data: D

  testCases = new TestCases()

  setup(page: Page): void {
    this.local.SetPage(page)
  }

  getMerge(flow: DataFlowType): D {
    return this.data.getMerge(flow) as D
  }

  addTestCase(title: string, data: DataFlowType): void {
    this.testCases.Add(title, data)
  }
}