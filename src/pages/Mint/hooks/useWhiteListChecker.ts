import { useCallback, useState } from 'react'

import { isAddress, whiteListChecker } from 'utils'

export const useWhiteListChecker = () => {
  const [value, setValue] = useState<string>('')
  const [proof, setProof] = useState<string | false>('')
  const [isConfirm, setIsConfirm] = useState<boolean>(false)

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const handleCheckWhiteList = useCallback(() => {
    if (!isAddress(value)) return

    const proof = whiteListChecker(value)

    if (proof && proof.length > 0) {
      setProof(proof)
    } else setProof(false)

    setIsConfirm(true)
  }, [value])

  const handleConfirm = useCallback(() => {
    setIsConfirm(false)
    setProof('')
    setValue('')
  }, [])

  return { value, proof, isConfirm, handleOnChange, handleCheckWhiteList, handleConfirm }
}
