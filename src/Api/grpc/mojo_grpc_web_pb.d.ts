import * as grpcWeb from 'grpc-web';

import * as src_Api_grpc_mojo_pb from '../../../src/Api/grpc/mojo_pb';


export class ECOS_APPClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  isApplicationExists(
    request: src_Api_grpc_mojo_pb.IsApplicationExistsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.IsApplicationExistsReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.IsApplicationExistsReply>;

  createApplication(
    request: src_Api_grpc_mojo_pb.CreateApplicationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.CreateApplicationReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.CreateApplicationReply>;

  deleteApplication(
    request: src_Api_grpc_mojo_pb.DeleteApplicationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.DeleteApplicationReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.DeleteApplicationReply>;

  updateApplication(
    request: src_Api_grpc_mojo_pb.UpdateApplicationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.UpdateApplicationReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.UpdateApplicationReply>;

  getApplication(
    request: src_Api_grpc_mojo_pb.GetApplicationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.GetApplicationReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.GetApplicationReply>;

  listApplication(
    request: src_Api_grpc_mojo_pb.ListApplicationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ListApplicationReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.ListApplicationReply>;

  updateEmailNotify(
    request: src_Api_grpc_mojo_pb.UpdateEmailNotifyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.UpdateEmailNotifyReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.UpdateEmailNotifyReply>;

  checkAppTrigger(
    request: src_Api_grpc_mojo_pb.CheckAppTriggerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.CheckAppTriggerReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.CheckAppTriggerReply>;

  listTag(
    request: src_Api_grpc_mojo_pb.ListTagRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ListTagReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.ListTagReply>;

  isExecutionExists(
    request: src_Api_grpc_mojo_pb.IsExecutionExistsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.IsExecutionExistsReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.IsExecutionExistsReply>;

  createExecution(
    request: src_Api_grpc_mojo_pb.CreateExecutionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.CreateExecutionReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.CreateExecutionReply>;

  deleteExecution(
    request: src_Api_grpc_mojo_pb.DeleteExecutionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.DeleteExecutionReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.DeleteExecutionReply>;

  killExecution(
    request: src_Api_grpc_mojo_pb.KillExecutionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.KillExecutionReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.KillExecutionReply>;

  getExecution(
    request: src_Api_grpc_mojo_pb.GetExecutionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.GetExecutionReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.GetExecutionReply>;

  listExecution(
    request: src_Api_grpc_mojo_pb.ListExecutionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ListExecutionReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.ListExecutionReply>;

  suspendTask(
    request: src_Api_grpc_mojo_pb.SuspendTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.SuspendTaskReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.SuspendTaskReply>;

  resumeTask(
    request: src_Api_grpc_mojo_pb.ResumeTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ResumeTaskReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.ResumeTaskReply>;

  retryTask(
    request: src_Api_grpc_mojo_pb.RetryTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.RetryTaskReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.RetryTaskReply>;

  updateTrigger(
    request: src_Api_grpc_mojo_pb.UpdateTriggerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.UpdateTriggerReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.UpdateTriggerReply>;

  validateCron(
    request: src_Api_grpc_mojo_pb.ValidateCronRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ValidateCronReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.ValidateCronReply>;

  listTopic(
    request: src_Api_grpc_mojo_pb.ListTopicRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ListTopicReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.ListTopicReply>;

  listQueue(
    request: src_Api_grpc_mojo_pb.ListQueueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ListQueueReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.ListQueueReply>;

  getInput(
    request: src_Api_grpc_mojo_pb.GetInputRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.GetInputReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.GetInputReply>;

  writeOutput(
    request: src_Api_grpc_mojo_pb.WriteOutputRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.WriteOutputReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.WriteOutputReply>;

  isAdmin(
    request: src_Api_grpc_mojo_pb.IsAdminRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.IsAdminReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.IsAdminReply>;

  favorite(
    request: src_Api_grpc_mojo_pb.FavoriteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.FavoriteReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.FavoriteReply>;

  unFavorite(
    request: src_Api_grpc_mojo_pb.UnFavoriteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.UnFavoriteReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.UnFavoriteReply>;

  emailUnsubscribe(
    request: src_Api_grpc_mojo_pb.EmailUnsubscribeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.EmailUnsubscribeReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.EmailUnsubscribeReply>;

  getUnSubscribe(
    request: src_Api_grpc_mojo_pb.GetUnSubscribeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.GetUnSubscribeReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.GetUnSubscribeReply>;

  emailReSubscribe(
    request: src_Api_grpc_mojo_pb.EmailReSubscribeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.EmailReSubscribeReply) => void
  ): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.EmailReSubscribeReply>;

}

export class ECOS_APPPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  isApplicationExists(
    request: src_Api_grpc_mojo_pb.IsApplicationExistsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.IsApplicationExistsReply>;

  createApplication(
    request: src_Api_grpc_mojo_pb.CreateApplicationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.CreateApplicationReply>;

  deleteApplication(
    request: src_Api_grpc_mojo_pb.DeleteApplicationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.DeleteApplicationReply>;

  updateApplication(
    request: src_Api_grpc_mojo_pb.UpdateApplicationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.UpdateApplicationReply>;

  getApplication(
    request: src_Api_grpc_mojo_pb.GetApplicationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.GetApplicationReply>;

  listApplication(
    request: src_Api_grpc_mojo_pb.ListApplicationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.ListApplicationReply>;

  updateEmailNotify(
    request: src_Api_grpc_mojo_pb.UpdateEmailNotifyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.UpdateEmailNotifyReply>;

  checkAppTrigger(
    request: src_Api_grpc_mojo_pb.CheckAppTriggerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.CheckAppTriggerReply>;

  listTag(
    request: src_Api_grpc_mojo_pb.ListTagRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.ListTagReply>;

  isExecutionExists(
    request: src_Api_grpc_mojo_pb.IsExecutionExistsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.IsExecutionExistsReply>;

  createExecution(
    request: src_Api_grpc_mojo_pb.CreateExecutionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.CreateExecutionReply>;

  deleteExecution(
    request: src_Api_grpc_mojo_pb.DeleteExecutionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.DeleteExecutionReply>;

  killExecution(
    request: src_Api_grpc_mojo_pb.KillExecutionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.KillExecutionReply>;

  getExecution(
    request: src_Api_grpc_mojo_pb.GetExecutionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.GetExecutionReply>;

  listExecution(
    request: src_Api_grpc_mojo_pb.ListExecutionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.ListExecutionReply>;

  suspendTask(
    request: src_Api_grpc_mojo_pb.SuspendTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.SuspendTaskReply>;

  resumeTask(
    request: src_Api_grpc_mojo_pb.ResumeTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.ResumeTaskReply>;

  retryTask(
    request: src_Api_grpc_mojo_pb.RetryTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.RetryTaskReply>;

  updateTrigger(
    request: src_Api_grpc_mojo_pb.UpdateTriggerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.UpdateTriggerReply>;

  validateCron(
    request: src_Api_grpc_mojo_pb.ValidateCronRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.ValidateCronReply>;

  listTopic(
    request: src_Api_grpc_mojo_pb.ListTopicRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.ListTopicReply>;

  listQueue(
    request: src_Api_grpc_mojo_pb.ListQueueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.ListQueueReply>;

  getInput(
    request: src_Api_grpc_mojo_pb.GetInputRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.GetInputReply>;

  writeOutput(
    request: src_Api_grpc_mojo_pb.WriteOutputRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.WriteOutputReply>;

  isAdmin(
    request: src_Api_grpc_mojo_pb.IsAdminRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.IsAdminReply>;

  favorite(
    request: src_Api_grpc_mojo_pb.FavoriteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.FavoriteReply>;

  unFavorite(
    request: src_Api_grpc_mojo_pb.UnFavoriteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.UnFavoriteReply>;

  emailUnsubscribe(
    request: src_Api_grpc_mojo_pb.EmailUnsubscribeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.EmailUnsubscribeReply>;

  getUnSubscribe(
    request: src_Api_grpc_mojo_pb.GetUnSubscribeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.GetUnSubscribeReply>;

  emailReSubscribe(
    request: src_Api_grpc_mojo_pb.EmailReSubscribeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<src_Api_grpc_mojo_pb.EmailReSubscribeReply>;

}

