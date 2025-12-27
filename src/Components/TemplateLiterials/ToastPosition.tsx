
type HorizentalPosition =  "top" | "center" | "right";
type verticalPosition = "top" | "center" | "bottom";

type  toastProps = {
    position  : Exclude<`${HorizentalPosition}-${verticalPosition}`,'center-center' | 'top-top'> | "center" | "top"
}


export default function ToastPosition({position}:toastProps) {
  return (
    <div>ToastPosition - {position} </div>
  )
}
