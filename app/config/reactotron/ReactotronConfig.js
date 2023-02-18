import Reactotron from 'reactotron-react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import { name as appName } from '../../../app.json'
import BuildConfig from 'react-native-config';

if (BuildConfig.ENV === 'DEVELOPMENT') {
    // https://github.com/infinitered/reactotron for more options!
    Reactotron
        .configure({ name: appName })
        .useReactNative()
        .use(reduxPlugin())
        //.use(overlay())
        .connect()

    // Let's clear Reactotron on every time we load the app
    Reactotron.clear()

    // Totally hacky, but this allows you to not both importing reactotron-react-native
    // on every file.  This is just DEV mode, so no big deal.
    console.tron = Reactotron
}
