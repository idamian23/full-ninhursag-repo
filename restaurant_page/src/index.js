import './sass/main.scss'
import { navbar } from './navbar'

const body = document.querySelector('.body__main-page')
const content = document.querySelector('#content')

content.append(navbar())
