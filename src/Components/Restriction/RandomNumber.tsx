

type RandomNumberType = {
     value : number;
}

type PositiveNumber = RandomNumberType & {
     isPositive  : boolean;
     isNegetive?: never;
     isZero?: never
}

type NegetiveNumber = RandomNumberType & {
     isPositive?: never;
     isNegetive : boolean;
     isZero?: never
}



type Zero = RandomNumberType & {
     isPositive?: never;
     isNegetive?: never;
     isZero : boolean
}


// type RandomNumberProps =
//   | { value: number; type: "positive" }
//   | { value: number; type: "negative" }
//   | { value: number; type: "zero" };




type RandomNumberProps = PositiveNumber | NegetiveNumber | Zero

export default function RandomNumber({value,isPositive,isNegetive,isZero}:RandomNumberProps) {
  return (
    <div>RandomNumber
         <h1> {value} {isPositive && isPositive} {isNegetive && isNegetive} {isZero && isZero} </h1>
    </div>
  )
}
