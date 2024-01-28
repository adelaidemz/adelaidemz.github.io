import { Button } from "@chakra-ui/react"

export default function Stellar({changePage}) {
    return (
        <div>
            <Button
                onClick={() => changePage(0)}
                >Back
            </Button>
            <h1>Stellar classification</h1>
        </div>
    )
}