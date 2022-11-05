import "./UtilitiesMenu.css"

import { MdColorLens } from 'react-icons/md';
import { TbMoon } from 'react-icons/tb';
import { FiSettings } from 'react-icons/fi';
function UtilitiesMenu(){
    return(
        <div class="support">
	<a href="" target="_blank">
    <FiSettings />
    </a>
    <a href="" target="_blank">
	<TbMoon />
    </a>
    <a href="" target="_blank">
	<MdColorLens />
    </a>
</div>
    );
}

export default UtilitiesMenu;