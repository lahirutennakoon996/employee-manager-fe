import * as ReactTesting from '@testing-library/react'

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: '',
    pathname: '',
    push: jest.fn(),
  }),
}))