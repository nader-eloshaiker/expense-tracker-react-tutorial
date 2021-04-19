import React from 'react'

type Props = {
  title: string
}

export const Header: React.FC<Props> = ({ title }: Props) => {
  return <h2>{title}</h2>
}
