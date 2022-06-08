export function info() {
    const argumentoDeEntrada = process.argv
    const sistemaOperativo = process.platform
    const versionNodeJS = process.version
    const memoriaTotalReservada = process.memoryUsage().rss
    const pathDeEjecucion = process.title
    const processId = process.pid
    const carpetaDelProyecto = process.cwd()
    return {argumentoDeEntrada, sistemaOperativo, versionNodeJS, memoriaTotalReservada, pathDeEjecucion, processId, carpetaDelProyecto}
}


