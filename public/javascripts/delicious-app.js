import '../sass/style.scss';
import autocomplete from './modules/autocomplete'
import { $, $$ } from './modules/bling';

autocomplete($('#address'), $('#lat'), $('#lng'))