$spoll = Get-Service Spooler
$spoll.Stop()
$spoll.start()