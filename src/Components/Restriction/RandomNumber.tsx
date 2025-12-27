

type RandomNumberType = {
  value: number;
    isPosetive: boolean;
    IsNegetive: boolean;
    isZero: boolean;}

export default function RandomNumber({value,isPosetive,IsNegetive,isZero}:RandomNumberType) {
  return (
    <div>RandomNumber
         <h1> {value} {isPosetive && isPosetive} {IsNegetive && IsNegetive} {isZero && isZero} </h1>
    </div>
  )
}
