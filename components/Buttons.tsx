import Link from 'next/link'
import { Button } from 'flowbite-react'
import { FaChevronRight } from 'react-icons/fa6'
import { IoMdDownload } from 'react-icons/io'
import { secondaryButtonTheme } from './theme/flowbite-react/ButtonTheme'

interface SecondaryButtonProps {
  link: string
  text: string
  newTab?: boolean
  iconRight?: boolean
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  link,
  text,
  newTab,
  iconRight,
}) => {
  return (
    <Button
      as={Link}
      href={link}
      theme={secondaryButtonTheme}
      color="primary"
      size="none"
      target={newTab ? '_blank' : undefined}
    >
      {iconRight && <IoMdDownload className="mr-[0.375rem] text-[1rem]" />}
      {text}
      {!iconRight && (
        <FaChevronRight className="relative top-[0.225rem] ml-[0.375rem] text-[0.65rem]" />
      )}
    </Button>
  )
}
