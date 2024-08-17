# DEFINES THESE! The Docker context directory path and the restore location
$ProjectToDockerContext = "D:\docker\Docker-Template-Stacks\React Development Template Stack\NodeReactWebService\TmpPrj"
$ProjectToRestore= "C:/Temp/test3"


# Check if the directory exists on the host
if (Test-Path $ProjectToRestore -PathType Container) 
{     
    # Remove target dir first on exist
    if (Test-Path -Path "$ProjectToDockerContext") 
    {
        Remove-Item -Path "$ProjectToDockerContext" -Recurse -Force
    }

    # Copy restore project in Docker context (root of Dockerfile)
    Copy-Item -Path "$ProjectToRestore" -Destination "$ProjectToDockerContext" -Recurse -Force    
    Clear-Host
    Write-Host "Restore directory has been copied in docker context!`n`t- $ProjectToRestore`n`n" -ForegroundColor Green

    # Execute docker files    
    $env:PROJECT_TO_RESTORE = $ProjectToRestore                 # Set the environment variable
    
    #docker build --no-cache -f Dockerfile_RESTORE_Project_Cont --build-arg HOST_DIR=$ProjectToRestore -t myapp .
    docker  compose -f compose_restore_project.yml up -d  --remove-orphans --build --force-recreate
	
	# Remove target
	Remove-Item -Path "$ProjectToDockerContext" -Recurse -Force
} 
else 
{ 
    Clear-Host
    Write-Host "ERROR! Configuration error`n"
    Write-Host "`t- Restore project directory NOT found!`n`t- $ProjectToRestore" -ForegroundColor red -NoNewline
    Write-Host "    <-- Not exists (`$ProjectToRestore)`n`n"
    Write-Host "CALL STACK:"
    
    Get-PSCallStack

    
    $_.ScriptStackTrace
    
}

# Build the Docker image with the build argument
# $ProjectToRestore MUST be in the docker context!!


# docker build --no-cache -f Dockerfile_RESTORE_Project_Cont --build-arg TEMP_DIR_EXISTS=false --build-arg HOST_DIR=C:/path/on/host -t myapp .
