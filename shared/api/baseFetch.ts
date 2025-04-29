export default function baseFetch<T>(request: string, options?: any): Promise<T> {
    const config = useRuntimeConfig()

    return $fetch<T>(request, {
        baseURL: config.public.apiBase,
        ...options,
    })
}