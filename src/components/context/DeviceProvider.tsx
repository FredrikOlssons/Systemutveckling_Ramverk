import React, { useEffect, useState} from "react"; 
import { FC, PropsWithChildren } from "react"; 

export interface DeviceContextData {
    devices: Device
}

export interface Device {
    isDesktop: boolean,
    isTablet: boolean,
    isMobile: boolean
}

const DefaultContextData: Device = {
    isDesktop: true,
    isTablet: false,
    isMobile: false 
}

export const DeviceContext = React.createContext<DeviceContextData>({
    devices: DefaultContextData
})

interface Props {}

const DeviceProvider: FC<PropsWithChildren<Props>> = (props) => {
    const [devices, setDevices] = useState<Device>(DefaultContextData)



    useEffect(() => {
        const onWindowChange = () => {
            if((window.innerWidth > 1250)) {
                setDevices({ isDesktop: true, isTablet: false, isMobile: false })
            } else if((window.innerWidth <= 1250 && window.innerWidth > 820)) {
                setDevices({ isDesktop: false, isTablet: true, isMobile: false })
            } else if((window.innerWidth <= 820)) {
                setDevices({ isDesktop: false, isTablet: false, isMobile: true} )
            }
        }

        onWindowChange()

        window.addEventListener("resize", onWindowChange)

    }, [])

    useEffect(() => {
    },[devices])

    return (
        <DeviceContext.Provider value={{ devices }}>
            {props.children}
        </DeviceContext.Provider>
    )

}

export default DeviceProvider