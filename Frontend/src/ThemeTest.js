import { useContext } from "react"
import {ThemeContext} from "./ThemeContext"

function ThemeTest() {
    const {theme, setTheme} = useContext(ThemeContext)

    const onChange = () => {
        if (theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
        console.log(theme);
        
    }

    return(
        <div>
            <h1>{theme}</h1>
            <button onClick={onChange}>
                toggle
            </button>
        </div>
    )
}

export default ThemeTest