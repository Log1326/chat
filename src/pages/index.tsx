import { Main } from '@/components/Main'
import { NextPageAuth } from '@/provider/auth/auth.types'

const index: NextPageAuth = () => {
	return <Main />
}
index.isOnlyUser = true
export default index
