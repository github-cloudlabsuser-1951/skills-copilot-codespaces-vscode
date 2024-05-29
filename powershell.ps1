# Login to Azure
Connect-AzAccount

# Set your subscription
Set-AzContext -Subscription "your-subscription-id"

# Create a resource group
New-AzResourceGroup -Name "example-resources" -Location "West Europe"

# Create a storage account
New-AzStorageAccount -ResourceGroupName "example-resources" -Name "examplestorageacc" -Location "West Europe" -SkuName "Standard_LRS" -Kind "StorageV2" -Tag @{ environment = "staging" }