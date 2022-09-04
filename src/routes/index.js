import Home from '~/components/pages/Home';
import Follow from '~/components/pages/Follow';
import Profile from '~/components/pages/Profile';
import Upload from '~/components/pages/Upload';
import UploadLayout from '~/components/Layout/UploadLayout';
import SignIn from '~/components/pages/SignIn';
import SignInLayout from '~/components/Layout/SignInLayout';


//Public routes
const publicRoutes = [
    {path: '/' ,component: Home},
    {path: 'follow',component: Follow}   ,
    {path: '@:nickname', component: Profile},
    {path: 'upload', component: Upload, layout: UploadLayout },
    {path: 'signin',component: SignIn,layout: SignInLayout},

]

const privateRoutes = [
    
    
]

export {publicRoutes,privateRoutes}