import { useCallback } from 'react'

import { Connector, useConnect } from 'wagmi'

import { connectorIcons, ConnectorNames } from 'config/web3'

const WalletItem = ({
  connector,
  handleConnect,
}: {
  connector: Connector<any, any, any>
  handleConnect: (_connector: Connector<any, any, any>) => void
}) => {
  return (
    <div
      className="flex flex-nowrap items-center justify-start gap-4 cursor-pointer px-4 py-2 font-medium text-black dark:text-white hover:text-secondary dark:hover:text-primary transition-colors duration-300"
      onClick={() => handleConnect(connector)}
    >
      <img src={connectorIcons[connector.id as ConnectorNames]} alt={connector.name} className="w-4 h-auto" />
      <div>{connector.name}</div>
    </div>
  )
}

const WalletListContainer = () => {
  const { connect, connectors } = useConnect({
    onError(error) {
      console.log('Error===>', error)
    },
  })

  const handleConnect = useCallback(
    (_connector: Connector<any, any, any>) => {
      try {
        connect({ connector: _connector })
      } catch (error) {
        console.log(error)
      }
    },
    [connect]
  )

  return (
    <div className="flex flex-col gap-2 w-max">
      {connectors.map((_connector) => {
        if (!_connector.ready) return null
        return <WalletItem key={_connector.name} connector={_connector} handleConnect={handleConnect} />
      })}
    </div>
  )
}

export default WalletListContainer
