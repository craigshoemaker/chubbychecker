const rules = require('./modules/validationRules');
const renderer = require('./modules/renderer');
const args = require('yargs').argv;
const fs = require('fs');

let input = `
---
title: Azure Quickstart - Upload, download, and list blobs in Azure Storage using Node.js | Microsoft Docs
description: In this quickstart, you create a storage account and a container. Then you use the storage client library for Node.js to upload a blob to Azure Storage, download a blob, and list the blobs in a container.
services: storage
author: craigshoemaker
manager: jeconnoc

ms.custom: mvc
ms.service: storage
ms.topic: quickstart
ms.date: 03/15/2018
ms.author: cshoe

# Customer intent: This is a very special customer intent statement.
---

# Quickstart: Sample quickstart

To complete this quickstart, you need an [Azure subscription](https://azure.microsoft.com/free/?WT.mc_id=A261C142F)

## Download the sample application

NOT_A_CHECKLIST

## Clean up resources
this is a test

## Next steps`;

if(args.src) {
    input = fs.readFileSync(args.src, 'utf8');
}

const response = rules.apply(input, args.type);

console.log(renderer.render(response, args.output));