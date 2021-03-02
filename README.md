# yarn-patch-issue

This is to replicate what I believe is a bug in Yarn but I am not certain. 

There are two packages in this monorepo both have a patched version of serverless-offline in their dependencies.
* Package A uses a patch that was created and applied in Powershell
* Package B uses a patch that was created and applied in Windows Subsystem for Linux

When `yarn` is run the patch on package a's serverless-offline does not get applied but the install completes successfully
the patch for package b's serverless-offline does get applied successfully.

