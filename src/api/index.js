import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YonghuController from './Yonghu'
import ShangpinfenleiController from './Shangpinfenlei'
import ChaoshigouwuController from './Chaoshigouwu'
import GouwudingdanController from './Gouwudingdan'
import NewstypeController from './Newstype'
import NewsController from './News'
import StoreupController from './Storeup'
import AboutusController from './Aboutus'
import SystemintroController from './Systemintro'
import DiscusschaoshigouwuController from './Discusschaoshigouwu'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/shangpinfenlei', ShangpinfenleiController({ config, db }))

	api.use('/chaoshigouwu', ChaoshigouwuController({ config, db }))

	api.use('/gouwudingdan', GouwudingdanController({ config, db }))

	api.use('/newstype', NewstypeController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/aboutus', AboutusController({ config, db }))

	api.use('/systemintro', SystemintroController({ config, db }))

	api.use('/discusschaoshigouwu', DiscusschaoshigouwuController({ config, db }))

	return api
}
