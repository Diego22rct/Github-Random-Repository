import type { APIRoute } from "astro";

const github_token = import.meta.env.GITHUB_TOKEN

export const GET: APIRoute = ({ params, request }) => {
    return new Response(JSON.stringify({
        message: "¡Esto es un GET!" + github_token
    })
    )
}