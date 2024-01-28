import { Button } from "@chakra-ui/react"

export default function Markov({changePage}) {
    return (
        <div>
            <Button
                onClick={() => changePage(0)}
                >Back
            </Button>
            <h1>Markov chain name generation</h1>
            <p>Uses a markov chain to generate stylized names using Javascript.</p>
        </div>
    )
}