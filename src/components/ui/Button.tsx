import { FC, PropsWithChildren } from 'react'

interface IButtonProps {
  cl?: string;
}

const Button: FC<PropsWithChildren<IButtonProps>> = ({ children, cl }) => {
  return (
    <div className={`${cl} btn`}>
      {children}
    </div>
  )
}

export default Button