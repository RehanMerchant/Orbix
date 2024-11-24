import { useTheme } from "@/components/Theme/theme-provider"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {

const {setTheme, theme} = useTheme()
function handelChange () {
  if(theme === "dark"){
    setTheme("light")
  } else{
    setTheme("dark")
  }
}


return (
 <Button onClick={handelChange} variant="themetoogle" size="icon2">
  {theme === "light" ? <Moon/> : <Sun/>}   
 </Button>
 )
}
