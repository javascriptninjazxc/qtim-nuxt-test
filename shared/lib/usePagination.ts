import { ref, computed } from 'vue'

export function usePagination<T>() {
    const pageSize = 8;
    const currentPage = ref(1)
    const items = ref<T[]>([])

    const totalPages = computed(() =>
        Math.ceil(items.value.length / pageSize)
    )

    const paginatedItems = computed(() => {
        const start = (currentPage.value - 1) * pageSize
        return items.value.slice(start, start + pageSize)
    })

    function setItems(data: T[]) {
        items.value = data
        currentPage.value = 1
    }

    function setPage(page: number) {
        if (page >= 1 && page <= totalPages.value) {
            currentPage.value = page
        }
    }

    function nextPage() {
        setPage(currentPage.value + 1)
    }

    function prevPage() {
        setPage(currentPage.value - 1)
    }

    return {
        items,
        paginatedItems,
        currentPage,
        pageSize,
        totalPages,
        setItems,
        setPage,
        nextPage,
        prevPage
    }
}