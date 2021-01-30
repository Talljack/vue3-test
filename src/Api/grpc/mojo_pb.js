// source: src/Api/grpc/mojo.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.ecos_app.Application', null, global);
goog.exportSymbol('proto.ecos_app.ApplicationInfo', null, global);
goog.exportSymbol('proto.ecos_app.CheckAppTriggerReply', null, global);
goog.exportSymbol('proto.ecos_app.CheckAppTriggerRequest', null, global);
goog.exportSymbol('proto.ecos_app.CreateApplicationReply', null, global);
goog.exportSymbol('proto.ecos_app.CreateApplicationRequest', null, global);
goog.exportSymbol('proto.ecos_app.CreateExecutionReply', null, global);
goog.exportSymbol('proto.ecos_app.CreateExecutionRequest', null, global);
goog.exportSymbol('proto.ecos_app.DeleteApplicationReply', null, global);
goog.exportSymbol('proto.ecos_app.DeleteApplicationRequest', null, global);
goog.exportSymbol('proto.ecos_app.DeleteExecutionReply', null, global);
goog.exportSymbol('proto.ecos_app.DeleteExecutionRequest', null, global);
goog.exportSymbol('proto.ecos_app.EmailReSubscribeReply', null, global);
goog.exportSymbol('proto.ecos_app.EmailReSubscribeRequest', null, global);
goog.exportSymbol('proto.ecos_app.EmailUnsubscribeReply', null, global);
goog.exportSymbol('proto.ecos_app.EmailUnsubscribeRequest', null, global);
goog.exportSymbol('proto.ecos_app.Event', null, global);
goog.exportSymbol('proto.ecos_app.Execution', null, global);
goog.exportSymbol('proto.ecos_app.ExecutionInfo', null, global);
goog.exportSymbol('proto.ecos_app.FavoriteReply', null, global);
goog.exportSymbol('proto.ecos_app.FavoriteRequest', null, global);
goog.exportSymbol('proto.ecos_app.GetApplicationReply', null, global);
goog.exportSymbol('proto.ecos_app.GetApplicationRequest', null, global);
goog.exportSymbol('proto.ecos_app.GetExecutionReply', null, global);
goog.exportSymbol('proto.ecos_app.GetExecutionRequest', null, global);
goog.exportSymbol('proto.ecos_app.GetInputReply', null, global);
goog.exportSymbol('proto.ecos_app.GetInputRequest', null, global);
goog.exportSymbol('proto.ecos_app.GetUnSubscribeReply', null, global);
goog.exportSymbol('proto.ecos_app.GetUnSubscribeRequest', null, global);
goog.exportSymbol('proto.ecos_app.IsAdminReply', null, global);
goog.exportSymbol('proto.ecos_app.IsAdminRequest', null, global);
goog.exportSymbol('proto.ecos_app.IsApplicationExistsReply', null, global);
goog.exportSymbol('proto.ecos_app.IsApplicationExistsRequest', null, global);
goog.exportSymbol('proto.ecos_app.IsExecutionExistsReply', null, global);
goog.exportSymbol('proto.ecos_app.IsExecutionExistsRequest', null, global);
goog.exportSymbol('proto.ecos_app.KillExecutionReply', null, global);
goog.exportSymbol('proto.ecos_app.KillExecutionRequest', null, global);
goog.exportSymbol('proto.ecos_app.ListApplicationReply', null, global);
goog.exportSymbol('proto.ecos_app.ListApplicationRequest', null, global);
goog.exportSymbol('proto.ecos_app.ListExecutionReply', null, global);
goog.exportSymbol('proto.ecos_app.ListExecutionRequest', null, global);
goog.exportSymbol('proto.ecos_app.ListQueueReply', null, global);
goog.exportSymbol('proto.ecos_app.ListQueueRequest', null, global);
goog.exportSymbol('proto.ecos_app.ListTagReply', null, global);
goog.exportSymbol('proto.ecos_app.ListTagRequest', null, global);
goog.exportSymbol('proto.ecos_app.ListTopicReply', null, global);
goog.exportSymbol('proto.ecos_app.ListTopicRequest', null, global);
goog.exportSymbol('proto.ecos_app.ResumeTaskReply', null, global);
goog.exportSymbol('proto.ecos_app.ResumeTaskRequest', null, global);
goog.exportSymbol('proto.ecos_app.RetryTaskReply', null, global);
goog.exportSymbol('proto.ecos_app.RetryTaskRequest', null, global);
goog.exportSymbol('proto.ecos_app.ScheduledTime', null, global);
goog.exportSymbol('proto.ecos_app.SuspendTaskReply', null, global);
goog.exportSymbol('proto.ecos_app.SuspendTaskRequest', null, global);
goog.exportSymbol('proto.ecos_app.Task', null, global);
goog.exportSymbol('proto.ecos_app.Trigger', null, global);
goog.exportSymbol('proto.ecos_app.Trigger.AppData', null, global);
goog.exportSymbol('proto.ecos_app.Trigger.DatasetData', null, global);
goog.exportSymbol('proto.ecos_app.Trigger.QueueData', null, global);
goog.exportSymbol('proto.ecos_app.Trigger.TopicData', null, global);
goog.exportSymbol('proto.ecos_app.TriggeredBy', null, global);
goog.exportSymbol('proto.ecos_app.UnFavoriteReply', null, global);
goog.exportSymbol('proto.ecos_app.UnFavoriteRequest', null, global);
goog.exportSymbol('proto.ecos_app.UpdateApplicationReply', null, global);
goog.exportSymbol('proto.ecos_app.UpdateApplicationRequest', null, global);
goog.exportSymbol('proto.ecos_app.UpdateEmailNotifyReply', null, global);
goog.exportSymbol('proto.ecos_app.UpdateEmailNotifyRequest', null, global);
goog.exportSymbol('proto.ecos_app.UpdateTriggerReply', null, global);
goog.exportSymbol('proto.ecos_app.UpdateTriggerRequest', null, global);
goog.exportSymbol('proto.ecos_app.ValidateCronReply', null, global);
goog.exportSymbol('proto.ecos_app.ValidateCronRequest', null, global);
goog.exportSymbol('proto.ecos_app.WriteOutputReply', null, global);
goog.exportSymbol('proto.ecos_app.WriteOutputRequest', null, global);
goog.exportSymbol('proto.ecos_app.unSubscriptionMail', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.IsApplicationExistsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.IsApplicationExistsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.IsApplicationExistsRequest.displayName = 'proto.ecos_app.IsApplicationExistsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.IsApplicationExistsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.IsApplicationExistsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.IsApplicationExistsReply.displayName = 'proto.ecos_app.IsApplicationExistsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.IsExecutionExistsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.IsExecutionExistsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.IsExecutionExistsRequest.displayName = 'proto.ecos_app.IsExecutionExistsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.IsExecutionExistsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.IsExecutionExistsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.IsExecutionExistsReply.displayName = 'proto.ecos_app.IsExecutionExistsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.CreateApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.CreateApplicationRequest.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.CreateApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.CreateApplicationRequest.displayName = 'proto.ecos_app.CreateApplicationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ScheduledTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.ScheduledTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ScheduledTime.displayName = 'proto.ecos_app.ScheduledTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.Trigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.Trigger.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.Trigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.Trigger.displayName = 'proto.ecos_app.Trigger';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.Trigger.TopicData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.Trigger.TopicData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.Trigger.TopicData.displayName = 'proto.ecos_app.Trigger.TopicData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.Trigger.QueueData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.Trigger.QueueData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.Trigger.QueueData.displayName = 'proto.ecos_app.Trigger.QueueData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.Trigger.AppData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.Trigger.AppData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.Trigger.AppData.displayName = 'proto.ecos_app.Trigger.AppData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.Trigger.DatasetData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.Trigger.DatasetData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.Trigger.DatasetData.displayName = 'proto.ecos_app.Trigger.DatasetData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.Task = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.Task.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.Task, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.Task.displayName = 'proto.ecos_app.Task';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.CreateApplicationReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.CreateApplicationReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.CreateApplicationReply.displayName = 'proto.ecos_app.CreateApplicationReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.Application = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.Application.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.Application, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.Application.displayName = 'proto.ecos_app.Application';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.DeleteApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.DeleteApplicationRequest.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.DeleteApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.DeleteApplicationRequest.displayName = 'proto.ecos_app.DeleteApplicationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.DeleteApplicationReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.DeleteApplicationReply.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.DeleteApplicationReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.DeleteApplicationReply.displayName = 'proto.ecos_app.DeleteApplicationReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.UpdateApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.UpdateApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.UpdateApplicationRequest.displayName = 'proto.ecos_app.UpdateApplicationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.UpdateApplicationReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.UpdateApplicationReply.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.UpdateApplicationReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.UpdateApplicationReply.displayName = 'proto.ecos_app.UpdateApplicationReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.SuspendTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.SuspendTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.SuspendTaskRequest.displayName = 'proto.ecos_app.SuspendTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.SuspendTaskReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.SuspendTaskReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.SuspendTaskReply.displayName = 'proto.ecos_app.SuspendTaskReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ResumeTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.ResumeTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ResumeTaskRequest.displayName = 'proto.ecos_app.ResumeTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ResumeTaskReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.ResumeTaskReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ResumeTaskReply.displayName = 'proto.ecos_app.ResumeTaskReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.RetryTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.RetryTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.RetryTaskRequest.displayName = 'proto.ecos_app.RetryTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.RetryTaskReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.RetryTaskReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.RetryTaskReply.displayName = 'proto.ecos_app.RetryTaskReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.GetApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.GetApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.GetApplicationRequest.displayName = 'proto.ecos_app.GetApplicationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.GetApplicationReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.GetApplicationReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.GetApplicationReply.displayName = 'proto.ecos_app.GetApplicationReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ListApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.ListApplicationRequest.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.ListApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ListApplicationRequest.displayName = 'proto.ecos_app.ListApplicationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ListApplicationReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.ListApplicationReply.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.ListApplicationReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ListApplicationReply.displayName = 'proto.ecos_app.ListApplicationReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ApplicationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.ApplicationInfo.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.ApplicationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ApplicationInfo.displayName = 'proto.ecos_app.ApplicationInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.TriggeredBy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.TriggeredBy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.TriggeredBy.displayName = 'proto.ecos_app.TriggeredBy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.CreateExecutionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.CreateExecutionRequest.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.CreateExecutionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.CreateExecutionRequest.displayName = 'proto.ecos_app.CreateExecutionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.CreateExecutionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.CreateExecutionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.CreateExecutionReply.displayName = 'proto.ecos_app.CreateExecutionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.Event.displayName = 'proto.ecos_app.Event';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.Execution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.Execution.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.Execution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.Execution.displayName = 'proto.ecos_app.Execution';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.DeleteExecutionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.DeleteExecutionRequest.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.DeleteExecutionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.DeleteExecutionRequest.displayName = 'proto.ecos_app.DeleteExecutionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.DeleteExecutionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.DeleteExecutionReply.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.DeleteExecutionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.DeleteExecutionReply.displayName = 'proto.ecos_app.DeleteExecutionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.KillExecutionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.KillExecutionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.KillExecutionRequest.displayName = 'proto.ecos_app.KillExecutionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.KillExecutionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.KillExecutionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.KillExecutionReply.displayName = 'proto.ecos_app.KillExecutionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.GetExecutionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.GetExecutionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.GetExecutionRequest.displayName = 'proto.ecos_app.GetExecutionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.GetExecutionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.GetExecutionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.GetExecutionReply.displayName = 'proto.ecos_app.GetExecutionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ListExecutionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.ListExecutionRequest.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.ListExecutionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ListExecutionRequest.displayName = 'proto.ecos_app.ListExecutionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ListExecutionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.ListExecutionReply.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.ListExecutionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ListExecutionReply.displayName = 'proto.ecos_app.ListExecutionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ExecutionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.ExecutionInfo.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.ExecutionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ExecutionInfo.displayName = 'proto.ecos_app.ExecutionInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.GetInputRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.GetInputRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.GetInputRequest.displayName = 'proto.ecos_app.GetInputRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.GetInputReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.GetInputReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.GetInputReply.displayName = 'proto.ecos_app.GetInputReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.WriteOutputRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.WriteOutputRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.WriteOutputRequest.displayName = 'proto.ecos_app.WriteOutputRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.WriteOutputReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.WriteOutputReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.WriteOutputReply.displayName = 'proto.ecos_app.WriteOutputReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ListTagRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.ListTagRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ListTagRequest.displayName = 'proto.ecos_app.ListTagRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ListTagReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.ListTagReply.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.ListTagReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ListTagReply.displayName = 'proto.ecos_app.ListTagReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.UpdateTriggerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.UpdateTriggerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.UpdateTriggerRequest.displayName = 'proto.ecos_app.UpdateTriggerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.UpdateTriggerReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.UpdateTriggerReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.UpdateTriggerReply.displayName = 'proto.ecos_app.UpdateTriggerReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ValidateCronRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.ValidateCronRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ValidateCronRequest.displayName = 'proto.ecos_app.ValidateCronRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ValidateCronReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.ValidateCronReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ValidateCronReply.displayName = 'proto.ecos_app.ValidateCronReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.UpdateEmailNotifyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.UpdateEmailNotifyRequest.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.UpdateEmailNotifyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.UpdateEmailNotifyRequest.displayName = 'proto.ecos_app.UpdateEmailNotifyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.UpdateEmailNotifyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.UpdateEmailNotifyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.UpdateEmailNotifyReply.displayName = 'proto.ecos_app.UpdateEmailNotifyReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.CheckAppTriggerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.CheckAppTriggerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.CheckAppTriggerRequest.displayName = 'proto.ecos_app.CheckAppTriggerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.CheckAppTriggerReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.CheckAppTriggerReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.CheckAppTriggerReply.displayName = 'proto.ecos_app.CheckAppTriggerReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.IsAdminRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.IsAdminRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.IsAdminRequest.displayName = 'proto.ecos_app.IsAdminRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.IsAdminReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.IsAdminReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.IsAdminReply.displayName = 'proto.ecos_app.IsAdminReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.FavoriteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.FavoriteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.FavoriteRequest.displayName = 'proto.ecos_app.FavoriteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.FavoriteReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.FavoriteReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.FavoriteReply.displayName = 'proto.ecos_app.FavoriteReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.UnFavoriteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.UnFavoriteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.UnFavoriteRequest.displayName = 'proto.ecos_app.UnFavoriteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.UnFavoriteReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.UnFavoriteReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.UnFavoriteReply.displayName = 'proto.ecos_app.UnFavoriteReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ListTopicRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.ListTopicRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ListTopicRequest.displayName = 'proto.ecos_app.ListTopicRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ListTopicReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.ListTopicReply.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.ListTopicReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ListTopicReply.displayName = 'proto.ecos_app.ListTopicReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ListQueueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.ListQueueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ListQueueRequest.displayName = 'proto.ecos_app.ListQueueRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.ListQueueReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.ListQueueReply.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.ListQueueReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.ListQueueReply.displayName = 'proto.ecos_app.ListQueueReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.EmailUnsubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.EmailUnsubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.EmailUnsubscribeRequest.displayName = 'proto.ecos_app.EmailUnsubscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.EmailUnsubscribeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.EmailUnsubscribeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.EmailUnsubscribeReply.displayName = 'proto.ecos_app.EmailUnsubscribeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.GetUnSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.GetUnSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.GetUnSubscribeRequest.displayName = 'proto.ecos_app.GetUnSubscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.unSubscriptionMail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.unSubscriptionMail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.unSubscriptionMail.displayName = 'proto.ecos_app.unSubscriptionMail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.GetUnSubscribeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ecos_app.GetUnSubscribeReply.repeatedFields_, null);
};
goog.inherits(proto.ecos_app.GetUnSubscribeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.GetUnSubscribeReply.displayName = 'proto.ecos_app.GetUnSubscribeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.EmailReSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.EmailReSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.EmailReSubscribeRequest.displayName = 'proto.ecos_app.EmailReSubscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ecos_app.EmailReSubscribeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ecos_app.EmailReSubscribeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ecos_app.EmailReSubscribeReply.displayName = 'proto.ecos_app.EmailReSubscribeReply';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.IsApplicationExistsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.IsApplicationExistsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.IsApplicationExistsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.IsApplicationExistsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.IsApplicationExistsRequest}
 */
proto.ecos_app.IsApplicationExistsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.IsApplicationExistsRequest;
  return proto.ecos_app.IsApplicationExistsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.IsApplicationExistsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.IsApplicationExistsRequest}
 */
proto.ecos_app.IsApplicationExistsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.IsApplicationExistsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.IsApplicationExistsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.IsApplicationExistsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.IsApplicationExistsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ecos_app.IsApplicationExistsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.IsApplicationExistsRequest} returns this
 */
proto.ecos_app.IsApplicationExistsRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.IsApplicationExistsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.IsApplicationExistsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.IsApplicationExistsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.IsApplicationExistsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    isExists: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.IsApplicationExistsReply}
 */
proto.ecos_app.IsApplicationExistsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.IsApplicationExistsReply;
  return proto.ecos_app.IsApplicationExistsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.IsApplicationExistsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.IsApplicationExistsReply}
 */
proto.ecos_app.IsApplicationExistsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsExists(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.IsApplicationExistsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.IsApplicationExistsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.IsApplicationExistsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.IsApplicationExistsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsExists();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_exists = 1;
 * @return {boolean}
 */
proto.ecos_app.IsApplicationExistsReply.prototype.getIsExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.IsApplicationExistsReply} returns this
 */
proto.ecos_app.IsApplicationExistsReply.prototype.setIsExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.IsExecutionExistsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.IsExecutionExistsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.IsExecutionExistsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.IsExecutionExistsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.IsExecutionExistsRequest}
 */
proto.ecos_app.IsExecutionExistsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.IsExecutionExistsRequest;
  return proto.ecos_app.IsExecutionExistsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.IsExecutionExistsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.IsExecutionExistsRequest}
 */
proto.ecos_app.IsExecutionExistsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.IsExecutionExistsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.IsExecutionExistsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.IsExecutionExistsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.IsExecutionExistsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ecos_app.IsExecutionExistsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.IsExecutionExistsRequest} returns this
 */
proto.ecos_app.IsExecutionExistsRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.IsExecutionExistsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.IsExecutionExistsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.IsExecutionExistsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.IsExecutionExistsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    isExists: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.IsExecutionExistsReply}
 */
proto.ecos_app.IsExecutionExistsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.IsExecutionExistsReply;
  return proto.ecos_app.IsExecutionExistsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.IsExecutionExistsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.IsExecutionExistsReply}
 */
proto.ecos_app.IsExecutionExistsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsExists(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.IsExecutionExistsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.IsExecutionExistsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.IsExecutionExistsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.IsExecutionExistsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsExists();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_exists = 1;
 * @return {boolean}
 */
proto.ecos_app.IsExecutionExistsReply.prototype.getIsExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.IsExecutionExistsReply} returns this
 */
proto.ecos_app.IsExecutionExistsReply.prototype.setIsExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.CreateApplicationRequest.repeatedFields_ = [6,7,8,10,14,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.CreateApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.CreateApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.CreateApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.CreateApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workloadType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workloadSettings: jspb.Message.getFieldWithDefault(msg, 3, ""),
    input: jspb.Message.getFieldWithDefault(msg, 4, ""),
    environmentVariablesMap: (f = msg.getEnvironmentVariablesMap()) ? f.toObject(includeInstance, undefined) : [],
    tagsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    triggersList: jspb.Message.toObjectList(msg.getTriggersList(),
    proto.ecos_app.Trigger.toObject, includeInstance),
    tasksList: jspb.Message.toObjectList(msg.getTasksList(),
    proto.ecos_app.Task.toObject, includeInstance),
    flowGraphData: jspb.Message.getFieldWithDefault(msg, 9, ""),
    emailNotifyUserListList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    comment: jspb.Message.getFieldWithDefault(msg, 11, ""),
    timeout: jspb.Message.getFieldWithDefault(msg, 12, 0),
    maxRetry: jspb.Message.getFieldWithDefault(msg, 13, 0),
    viewersList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
    editorsList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    emailNotify: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    tspkg: jspb.Message.getFieldWithDefault(msg, 17, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.CreateApplicationRequest}
 */
proto.ecos_app.CreateApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.CreateApplicationRequest;
  return proto.ecos_app.CreateApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.CreateApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.CreateApplicationRequest}
 */
proto.ecos_app.CreateApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadSettings(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInput(value);
      break;
    case 5:
      var value = msg.getEnvironmentVariablesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 7:
      var value = new proto.ecos_app.Trigger;
      reader.readMessage(value,proto.ecos_app.Trigger.deserializeBinaryFromReader);
      msg.addTriggers(value);
      break;
    case 8:
      var value = new proto.ecos_app.Task;
      reader.readMessage(value,proto.ecos_app.Task.deserializeBinaryFromReader);
      msg.addTasks(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlowGraphData(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addEmailNotifyUserList(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeout(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxRetry(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addViewers(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addEditors(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailNotify(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setTspkg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.CreateApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.CreateApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.CreateApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.CreateApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkloadType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkloadSettings();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInput();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEnvironmentVariablesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getTriggersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.ecos_app.Trigger.serializeBinaryToWriter
    );
  }
  f = message.getTasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.ecos_app.Task.serializeBinaryToWriter
    );
  }
  f = message.getFlowGraphData();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getEmailNotifyUserListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getMaxRetry();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getViewersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
  f = message.getEditorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getEmailNotify();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getTspkg();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workload_type = 2;
 * @return {string}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getWorkloadType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.setWorkloadType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string workload_settings = 3;
 * @return {string}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getWorkloadSettings = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.setWorkloadSettings = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string input = 4;
 * @return {string}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getInput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.setInput = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> environment_variables = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getEnvironmentVariablesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.clearEnvironmentVariablesMap = function() {
  this.getEnvironmentVariablesMap().clear();
  return this;};


/**
 * repeated string tags = 6;
 * @return {!Array<string>}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * repeated Trigger triggers = 7;
 * @return {!Array<!proto.ecos_app.Trigger>}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getTriggersList = function() {
  return /** @type{!Array<!proto.ecos_app.Trigger>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ecos_app.Trigger, 7));
};


/**
 * @param {!Array<!proto.ecos_app.Trigger>} value
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
*/
proto.ecos_app.CreateApplicationRequest.prototype.setTriggersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.ecos_app.Trigger=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Trigger}
 */
proto.ecos_app.CreateApplicationRequest.prototype.addTriggers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.ecos_app.Trigger, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.clearTriggersList = function() {
  return this.setTriggersList([]);
};


/**
 * repeated Task tasks = 8;
 * @return {!Array<!proto.ecos_app.Task>}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getTasksList = function() {
  return /** @type{!Array<!proto.ecos_app.Task>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ecos_app.Task, 8));
};


/**
 * @param {!Array<!proto.ecos_app.Task>} value
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
*/
proto.ecos_app.CreateApplicationRequest.prototype.setTasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.ecos_app.Task=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Task}
 */
proto.ecos_app.CreateApplicationRequest.prototype.addTasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.ecos_app.Task, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.clearTasksList = function() {
  return this.setTasksList([]);
};


/**
 * optional string flow_graph_data = 9;
 * @return {string}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getFlowGraphData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.setFlowGraphData = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated string email_notify_user_list = 10;
 * @return {!Array<string>}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getEmailNotifyUserListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.setEmailNotifyUserListList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.addEmailNotifyUserList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.clearEmailNotifyUserListList = function() {
  return this.setEmailNotifyUserListList([]);
};


/**
 * optional string comment = 11;
 * @return {string}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int64 timeout = 12;
 * @return {number}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 max_retry = 13;
 * @return {number}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getMaxRetry = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.setMaxRetry = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * repeated string viewers = 14;
 * @return {!Array<string>}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getViewersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.setViewersList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.addViewers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.clearViewersList = function() {
  return this.setViewersList([]);
};


/**
 * repeated string editors = 15;
 * @return {!Array<string>}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getEditorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.setEditorsList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.addEditors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.clearEditorsList = function() {
  return this.setEditorsList([]);
};


/**
 * optional bool email_notify = 16;
 * @return {boolean}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getEmailNotify = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.setEmailNotify = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional string tspkg = 17;
 * @return {string}
 */
proto.ecos_app.CreateApplicationRequest.prototype.getTspkg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateApplicationRequest} returns this
 */
proto.ecos_app.CreateApplicationRequest.prototype.setTspkg = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ScheduledTime.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ScheduledTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ScheduledTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ScheduledTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    startTime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    every: jspb.Message.getFieldWithDefault(msg, 2, 0),
    unit: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ScheduledTime}
 */
proto.ecos_app.ScheduledTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ScheduledTime;
  return proto.ecos_app.ScheduledTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ScheduledTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ScheduledTime}
 */
proto.ecos_app.ScheduledTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEvery(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ScheduledTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ScheduledTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ScheduledTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ScheduledTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartTime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEvery();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUnit();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 start_time = 1;
 * @return {number}
 */
proto.ecos_app.ScheduledTime.prototype.getStartTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ScheduledTime} returns this
 */
proto.ecos_app.ScheduledTime.prototype.setStartTime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 every = 2;
 * @return {number}
 */
proto.ecos_app.ScheduledTime.prototype.getEvery = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ScheduledTime} returns this
 */
proto.ecos_app.ScheduledTime.prototype.setEvery = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string unit = 3;
 * @return {string}
 */
proto.ecos_app.ScheduledTime.prototype.getUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ScheduledTime} returns this
 */
proto.ecos_app.ScheduledTime.prototype.setUnit = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.Trigger.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.Trigger.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.Trigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.Trigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Trigger.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    turnedOn: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    cronSpec: jspb.Message.getFieldWithDefault(msg, 4, ""),
    scheduledTimeData: (f = msg.getScheduledTimeData()) && proto.ecos_app.ScheduledTime.toObject(includeInstance, f),
    topicdata: (f = msg.getTopicdata()) && proto.ecos_app.Trigger.TopicData.toObject(includeInstance, f),
    queuedata: (f = msg.getQueuedata()) && proto.ecos_app.Trigger.QueueData.toObject(includeInstance, f),
    appData: (f = msg.getAppData()) && proto.ecos_app.Trigger.AppData.toObject(includeInstance, f),
    datasetDataListList: jspb.Message.toObjectList(msg.getDatasetDataListList(),
    proto.ecos_app.Trigger.DatasetData.toObject, includeInstance),
    recover: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    isRepeated: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    lastRun: jspb.Message.getFieldWithDefault(msg, 12, 0),
    lastRunExecutionId: jspb.Message.getFieldWithDefault(msg, 13, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 14, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.Trigger}
 */
proto.ecos_app.Trigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.Trigger;
  return proto.ecos_app.Trigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.Trigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.Trigger}
 */
proto.ecos_app.Trigger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTurnedOn(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCronSpec(value);
      break;
    case 5:
      var value = new proto.ecos_app.ScheduledTime;
      reader.readMessage(value,proto.ecos_app.ScheduledTime.deserializeBinaryFromReader);
      msg.setScheduledTimeData(value);
      break;
    case 6:
      var value = new proto.ecos_app.Trigger.TopicData;
      reader.readMessage(value,proto.ecos_app.Trigger.TopicData.deserializeBinaryFromReader);
      msg.setTopicdata(value);
      break;
    case 7:
      var value = new proto.ecos_app.Trigger.QueueData;
      reader.readMessage(value,proto.ecos_app.Trigger.QueueData.deserializeBinaryFromReader);
      msg.setQueuedata(value);
      break;
    case 8:
      var value = new proto.ecos_app.Trigger.AppData;
      reader.readMessage(value,proto.ecos_app.Trigger.AppData.deserializeBinaryFromReader);
      msg.setAppData(value);
      break;
    case 9:
      var value = new proto.ecos_app.Trigger.DatasetData;
      reader.readMessage(value,proto.ecos_app.Trigger.DatasetData.deserializeBinaryFromReader);
      msg.addDatasetDataList(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecover(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRepeated(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastRun(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastRunExecutionId(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.Trigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.Trigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.Trigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Trigger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTurnedOn();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getCronSpec();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getScheduledTimeData();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ecos_app.ScheduledTime.serializeBinaryToWriter
    );
  }
  f = message.getTopicdata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ecos_app.Trigger.TopicData.serializeBinaryToWriter
    );
  }
  f = message.getQueuedata();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ecos_app.Trigger.QueueData.serializeBinaryToWriter
    );
  }
  f = message.getAppData();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ecos_app.Trigger.AppData.serializeBinaryToWriter
    );
  }
  f = message.getDatasetDataListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.ecos_app.Trigger.DatasetData.serializeBinaryToWriter
    );
  }
  f = message.getRecover();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getIsRepeated();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getLastRun();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getLastRunExecutionId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.Trigger.TopicData.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.Trigger.TopicData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.Trigger.TopicData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Trigger.TopicData.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    inputKey: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.Trigger.TopicData}
 */
proto.ecos_app.Trigger.TopicData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.Trigger.TopicData;
  return proto.ecos_app.Trigger.TopicData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.Trigger.TopicData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.Trigger.TopicData}
 */
proto.ecos_app.Trigger.TopicData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.Trigger.TopicData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.Trigger.TopicData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.Trigger.TopicData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Trigger.TopicData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInputKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.ecos_app.Trigger.TopicData.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Trigger.TopicData} returns this
 */
proto.ecos_app.Trigger.TopicData.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ecos_app.Trigger.TopicData.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Trigger.TopicData} returns this
 */
proto.ecos_app.Trigger.TopicData.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string input_key = 3;
 * @return {string}
 */
proto.ecos_app.Trigger.TopicData.prototype.getInputKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Trigger.TopicData} returns this
 */
proto.ecos_app.Trigger.TopicData.prototype.setInputKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.Trigger.QueueData.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.Trigger.QueueData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.Trigger.QueueData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Trigger.QueueData.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    inputKey: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.Trigger.QueueData}
 */
proto.ecos_app.Trigger.QueueData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.Trigger.QueueData;
  return proto.ecos_app.Trigger.QueueData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.Trigger.QueueData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.Trigger.QueueData}
 */
proto.ecos_app.Trigger.QueueData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.Trigger.QueueData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.Trigger.QueueData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.Trigger.QueueData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Trigger.QueueData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInputKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.ecos_app.Trigger.QueueData.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Trigger.QueueData} returns this
 */
proto.ecos_app.Trigger.QueueData.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ecos_app.Trigger.QueueData.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Trigger.QueueData} returns this
 */
proto.ecos_app.Trigger.QueueData.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string input_key = 3;
 * @return {string}
 */
proto.ecos_app.Trigger.QueueData.prototype.getInputKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Trigger.QueueData} returns this
 */
proto.ecos_app.Trigger.QueueData.prototype.setInputKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.Trigger.AppData.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.Trigger.AppData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.Trigger.AppData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Trigger.AppData.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    applicationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    applicationName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.Trigger.AppData}
 */
proto.ecos_app.Trigger.AppData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.Trigger.AppData;
  return proto.ecos_app.Trigger.AppData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.Trigger.AppData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.Trigger.AppData}
 */
proto.ecos_app.Trigger.AppData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.Trigger.AppData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.Trigger.AppData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.Trigger.AppData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Trigger.AppData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getApplicationName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.ecos_app.Trigger.AppData.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Trigger.AppData} returns this
 */
proto.ecos_app.Trigger.AppData.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string application_ID = 2;
 * @return {string}
 */
proto.ecos_app.Trigger.AppData.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Trigger.AppData} returns this
 */
proto.ecos_app.Trigger.AppData.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string application_name = 3;
 * @return {string}
 */
proto.ecos_app.Trigger.AppData.prototype.getApplicationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Trigger.AppData} returns this
 */
proto.ecos_app.Trigger.AppData.prototype.setApplicationName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.Trigger.DatasetData.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.Trigger.DatasetData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.Trigger.DatasetData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Trigger.DatasetData.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.Trigger.DatasetData}
 */
proto.ecos_app.Trigger.DatasetData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.Trigger.DatasetData;
  return proto.ecos_app.Trigger.DatasetData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.Trigger.DatasetData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.Trigger.DatasetData}
 */
proto.ecos_app.Trigger.DatasetData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.Trigger.DatasetData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.Trigger.DatasetData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.Trigger.DatasetData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Trigger.DatasetData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string location = 1;
 * @return {string}
 */
proto.ecos_app.Trigger.DatasetData.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Trigger.DatasetData} returns this
 */
proto.ecos_app.Trigger.DatasetData.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cluster_ID = 2;
 * @return {string}
 */
proto.ecos_app.Trigger.DatasetData.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Trigger.DatasetData} returns this
 */
proto.ecos_app.Trigger.DatasetData.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_name = 3;
 * @return {string}
 */
proto.ecos_app.Trigger.DatasetData.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Trigger.DatasetData} returns this
 */
proto.ecos_app.Trigger.DatasetData.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.ecos_app.Trigger.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Trigger} returns this
 */
proto.ecos_app.Trigger.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.ecos_app.Trigger.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Trigger} returns this
 */
proto.ecos_app.Trigger.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool turned_on = 3;
 * @return {boolean}
 */
proto.ecos_app.Trigger.prototype.getTurnedOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.Trigger} returns this
 */
proto.ecos_app.Trigger.prototype.setTurnedOn = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string cron_spec = 4;
 * @return {string}
 */
proto.ecos_app.Trigger.prototype.getCronSpec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Trigger} returns this
 */
proto.ecos_app.Trigger.prototype.setCronSpec = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional ScheduledTime scheduled_time_data = 5;
 * @return {?proto.ecos_app.ScheduledTime}
 */
proto.ecos_app.Trigger.prototype.getScheduledTimeData = function() {
  return /** @type{?proto.ecos_app.ScheduledTime} */ (
    jspb.Message.getWrapperField(this, proto.ecos_app.ScheduledTime, 5));
};


/**
 * @param {?proto.ecos_app.ScheduledTime|undefined} value
 * @return {!proto.ecos_app.Trigger} returns this
*/
proto.ecos_app.Trigger.prototype.setScheduledTimeData = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ecos_app.Trigger} returns this
 */
proto.ecos_app.Trigger.prototype.clearScheduledTimeData = function() {
  return this.setScheduledTimeData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ecos_app.Trigger.prototype.hasScheduledTimeData = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TopicData topicData = 6;
 * @return {?proto.ecos_app.Trigger.TopicData}
 */
proto.ecos_app.Trigger.prototype.getTopicdata = function() {
  return /** @type{?proto.ecos_app.Trigger.TopicData} */ (
    jspb.Message.getWrapperField(this, proto.ecos_app.Trigger.TopicData, 6));
};


/**
 * @param {?proto.ecos_app.Trigger.TopicData|undefined} value
 * @return {!proto.ecos_app.Trigger} returns this
*/
proto.ecos_app.Trigger.prototype.setTopicdata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ecos_app.Trigger} returns this
 */
proto.ecos_app.Trigger.prototype.clearTopicdata = function() {
  return this.setTopicdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ecos_app.Trigger.prototype.hasTopicdata = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional QueueData queueData = 7;
 * @return {?proto.ecos_app.Trigger.QueueData}
 */
proto.ecos_app.Trigger.prototype.getQueuedata = function() {
  return /** @type{?proto.ecos_app.Trigger.QueueData} */ (
    jspb.Message.getWrapperField(this, proto.ecos_app.Trigger.QueueData, 7));
};


/**
 * @param {?proto.ecos_app.Trigger.QueueData|undefined} value
 * @return {!proto.ecos_app.Trigger} returns this
*/
proto.ecos_app.Trigger.prototype.setQueuedata = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ecos_app.Trigger} returns this
 */
proto.ecos_app.Trigger.prototype.clearQueuedata = function() {
  return this.setQueuedata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ecos_app.Trigger.prototype.hasQueuedata = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional AppData app_data = 8;
 * @return {?proto.ecos_app.Trigger.AppData}
 */
proto.ecos_app.Trigger.prototype.getAppData = function() {
  return /** @type{?proto.ecos_app.Trigger.AppData} */ (
    jspb.Message.getWrapperField(this, proto.ecos_app.Trigger.AppData, 8));
};


/**
 * @param {?proto.ecos_app.Trigger.AppData|undefined} value
 * @return {!proto.ecos_app.Trigger} returns this
*/
proto.ecos_app.Trigger.prototype.setAppData = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ecos_app.Trigger} returns this
 */
proto.ecos_app.Trigger.prototype.clearAppData = function() {
  return this.setAppData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ecos_app.Trigger.prototype.hasAppData = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated DatasetData dataset_data_list = 9;
 * @return {!Array<!proto.ecos_app.Trigger.DatasetData>}
 */
proto.ecos_app.Trigger.prototype.getDatasetDataListList = function() {
  return /** @type{!Array<!proto.ecos_app.Trigger.DatasetData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ecos_app.Trigger.DatasetData, 9));
};


/**
 * @param {!Array<!proto.ecos_app.Trigger.DatasetData>} value
 * @return {!proto.ecos_app.Trigger} returns this
*/
proto.ecos_app.Trigger.prototype.setDatasetDataListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.ecos_app.Trigger.DatasetData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Trigger.DatasetData}
 */
proto.ecos_app.Trigger.prototype.addDatasetDataList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.ecos_app.Trigger.DatasetData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.Trigger} returns this
 */
proto.ecos_app.Trigger.prototype.clearDatasetDataListList = function() {
  return this.setDatasetDataListList([]);
};


/**
 * optional bool recover = 10;
 * @return {boolean}
 */
proto.ecos_app.Trigger.prototype.getRecover = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.Trigger} returns this
 */
proto.ecos_app.Trigger.prototype.setRecover = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool is_repeated = 11;
 * @return {boolean}
 */
proto.ecos_app.Trigger.prototype.getIsRepeated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.Trigger} returns this
 */
proto.ecos_app.Trigger.prototype.setIsRepeated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional int64 last_run = 12;
 * @return {number}
 */
proto.ecos_app.Trigger.prototype.getLastRun = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.Trigger} returns this
 */
proto.ecos_app.Trigger.prototype.setLastRun = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string last_run_execution_id = 13;
 * @return {string}
 */
proto.ecos_app.Trigger.prototype.getLastRunExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Trigger} returns this
 */
proto.ecos_app.Trigger.prototype.setLastRunExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int64 createdAt = 14;
 * @return {number}
 */
proto.ecos_app.Trigger.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.Trigger} returns this
 */
proto.ecos_app.Trigger.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.Task.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.Task.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.Task.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.Task} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Task.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    applicationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    upstreamTasksList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    when: jspb.Message.getFieldWithDefault(msg, 5, ""),
    input: jspb.Message.getFieldWithDefault(msg, 6, ""),
    environmentVariablesMap: (f = msg.getEnvironmentVariablesMap()) ? f.toObject(includeInstance, undefined) : [],
    isSuspended: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    status: jspb.Message.getFieldWithDefault(msg, 9, ""),
    executionId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    applicationName: jspb.Message.getFieldWithDefault(msg, 11, ""),
    result: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.Task}
 */
proto.ecos_app.Task.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.Task;
  return proto.ecos_app.Task.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.Task} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.Task}
 */
proto.ecos_app.Task.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addUpstreamTasks(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWhen(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setInput(value);
      break;
    case 7:
      var value = msg.getEnvironmentVariablesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSuspended(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationName(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.Task.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.Task.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.Task} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Task.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUpstreamTasksList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getWhen();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getInput();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEnvironmentVariablesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getIsSuspended();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getExecutionId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getApplicationName();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ecos_app.Task.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Task} returns this
 */
proto.ecos_app.Task.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string application_ID = 2;
 * @return {string}
 */
proto.ecos_app.Task.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Task} returns this
 */
proto.ecos_app.Task.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.ecos_app.Task.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Task} returns this
 */
proto.ecos_app.Task.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string upstream_tasks = 4;
 * @return {!Array<string>}
 */
proto.ecos_app.Task.prototype.getUpstreamTasksList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.Task} returns this
 */
proto.ecos_app.Task.prototype.setUpstreamTasksList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Task} returns this
 */
proto.ecos_app.Task.prototype.addUpstreamTasks = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.Task} returns this
 */
proto.ecos_app.Task.prototype.clearUpstreamTasksList = function() {
  return this.setUpstreamTasksList([]);
};


/**
 * optional string when = 5;
 * @return {string}
 */
proto.ecos_app.Task.prototype.getWhen = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Task} returns this
 */
proto.ecos_app.Task.prototype.setWhen = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string input = 6;
 * @return {string}
 */
proto.ecos_app.Task.prototype.getInput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Task} returns this
 */
proto.ecos_app.Task.prototype.setInput = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * map<string, string> environment_variables = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.ecos_app.Task.prototype.getEnvironmentVariablesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ecos_app.Task} returns this
 */
proto.ecos_app.Task.prototype.clearEnvironmentVariablesMap = function() {
  this.getEnvironmentVariablesMap().clear();
  return this;};


/**
 * optional bool is_suspended = 8;
 * @return {boolean}
 */
proto.ecos_app.Task.prototype.getIsSuspended = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.Task} returns this
 */
proto.ecos_app.Task.prototype.setIsSuspended = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional string status = 9;
 * @return {string}
 */
proto.ecos_app.Task.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Task} returns this
 */
proto.ecos_app.Task.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string execution_ID = 10;
 * @return {string}
 */
proto.ecos_app.Task.prototype.getExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Task} returns this
 */
proto.ecos_app.Task.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string application_name = 11;
 * @return {string}
 */
proto.ecos_app.Task.prototype.getApplicationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Task} returns this
 */
proto.ecos_app.Task.prototype.setApplicationName = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string result = 12;
 * @return {string}
 */
proto.ecos_app.Task.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Task} returns this
 */
proto.ecos_app.Task.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.CreateApplicationReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.CreateApplicationReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.CreateApplicationReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.CreateApplicationReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.ecos_app.Application.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.CreateApplicationReply}
 */
proto.ecos_app.CreateApplicationReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.CreateApplicationReply;
  return proto.ecos_app.CreateApplicationReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.CreateApplicationReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.CreateApplicationReply}
 */
proto.ecos_app.CreateApplicationReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ecos_app.Application;
      reader.readMessage(value,proto.ecos_app.Application.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.CreateApplicationReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.CreateApplicationReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.CreateApplicationReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.CreateApplicationReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ecos_app.Application.serializeBinaryToWriter
    );
  }
};


/**
 * optional Application result = 1;
 * @return {?proto.ecos_app.Application}
 */
proto.ecos_app.CreateApplicationReply.prototype.getResult = function() {
  return /** @type{?proto.ecos_app.Application} */ (
    jspb.Message.getWrapperField(this, proto.ecos_app.Application, 1));
};


/**
 * @param {?proto.ecos_app.Application|undefined} value
 * @return {!proto.ecos_app.CreateApplicationReply} returns this
*/
proto.ecos_app.CreateApplicationReply.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ecos_app.CreateApplicationReply} returns this
 */
proto.ecos_app.CreateApplicationReply.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ecos_app.CreateApplicationReply.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.Application.repeatedFields_ = [6,7,13,16,21,22,23,24];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.Application.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.Application.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.Application} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Application.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workloadType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workloadSettings: jspb.Message.getFieldWithDefault(msg, 3, ""),
    input: jspb.Message.getFieldWithDefault(msg, 4, ""),
    environmentVariablesMap: (f = msg.getEnvironmentVariablesMap()) ? f.toObject(includeInstance, undefined) : [],
    tagsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    triggersList: jspb.Message.toObjectList(msg.getTriggersList(),
    proto.ecos_app.Trigger.toObject, includeInstance),
    creator: jspb.Message.getFieldWithDefault(msg, 8, ""),
    applicationId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    clusterName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    createdTime: jspb.Message.getFieldWithDefault(msg, 11, 0),
    clusterId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    tasksList: jspb.Message.toObjectList(msg.getTasksList(),
    proto.ecos_app.Task.toObject, includeInstance),
    flowGraphData: jspb.Message.getFieldWithDefault(msg, 14, ""),
    emailNotify: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    emailNotifyUserListList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
    comment: jspb.Message.getFieldWithDefault(msg, 17, ""),
    timeout: jspb.Message.getFieldWithDefault(msg, 18, 0),
    maxRetry: jspb.Message.getFieldWithDefault(msg, 19, 0),
    curRetryCount: jspb.Message.getFieldWithDefault(msg, 20, 0),
    viewersList: (f = jspb.Message.getRepeatedField(msg, 21)) == null ? undefined : f,
    editorsList: (f = jspb.Message.getRepeatedField(msg, 22)) == null ? undefined : f,
    favoritedByList: (f = jspb.Message.getRepeatedField(msg, 23)) == null ? undefined : f,
    systemLogList: jspb.Message.toObjectList(msg.getSystemLogList(),
    proto.ecos_app.Event.toObject, includeInstance),
    tspkg: jspb.Message.getFieldWithDefault(msg, 25, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.Application}
 */
proto.ecos_app.Application.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.Application;
  return proto.ecos_app.Application.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.Application} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.Application}
 */
proto.ecos_app.Application.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadSettings(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInput(value);
      break;
    case 5:
      var value = msg.getEnvironmentVariablesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 7:
      var value = new proto.ecos_app.Trigger;
      reader.readMessage(value,proto.ecos_app.Trigger.deserializeBinaryFromReader);
      msg.addTriggers(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreator(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedTime(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 13:
      var value = new proto.ecos_app.Task;
      reader.readMessage(value,proto.ecos_app.Task.deserializeBinaryFromReader);
      msg.addTasks(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlowGraphData(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailNotify(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.addEmailNotifyUserList(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeout(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxRetry(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurRetryCount(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.addViewers(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.addEditors(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.addFavoritedBy(value);
      break;
    case 24:
      var value = new proto.ecos_app.Event;
      reader.readMessage(value,proto.ecos_app.Event.deserializeBinaryFromReader);
      msg.addSystemLog(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setTspkg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.Application.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.Application.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.Application} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Application.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkloadType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkloadSettings();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInput();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEnvironmentVariablesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getTriggersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.ecos_app.Trigger.serializeBinaryToWriter
    );
  }
  f = message.getCreator();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCreatedTime();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getTasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.ecos_app.Task.serializeBinaryToWriter
    );
  }
  f = message.getFlowGraphData();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getEmailNotify();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getEmailNotifyUserListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      16,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
  f = message.getMaxRetry();
  if (f !== 0) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = message.getCurRetryCount();
  if (f !== 0) {
    writer.writeInt64(
      20,
      f
    );
  }
  f = message.getViewersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      21,
      f
    );
  }
  f = message.getEditorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      22,
      f
    );
  }
  f = message.getFavoritedByList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      23,
      f
    );
  }
  f = message.getSystemLogList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      24,
      f,
      proto.ecos_app.Event.serializeBinaryToWriter
    );
  }
  f = message.getTspkg();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ecos_app.Application.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workload_type = 2;
 * @return {string}
 */
proto.ecos_app.Application.prototype.getWorkloadType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setWorkloadType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string workload_settings = 3;
 * @return {string}
 */
proto.ecos_app.Application.prototype.getWorkloadSettings = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setWorkloadSettings = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string input = 4;
 * @return {string}
 */
proto.ecos_app.Application.prototype.getInput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setInput = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> environment_variables = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.ecos_app.Application.prototype.getEnvironmentVariablesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.clearEnvironmentVariablesMap = function() {
  this.getEnvironmentVariablesMap().clear();
  return this;};


/**
 * repeated string tags = 6;
 * @return {!Array<string>}
 */
proto.ecos_app.Application.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * repeated Trigger triggers = 7;
 * @return {!Array<!proto.ecos_app.Trigger>}
 */
proto.ecos_app.Application.prototype.getTriggersList = function() {
  return /** @type{!Array<!proto.ecos_app.Trigger>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ecos_app.Trigger, 7));
};


/**
 * @param {!Array<!proto.ecos_app.Trigger>} value
 * @return {!proto.ecos_app.Application} returns this
*/
proto.ecos_app.Application.prototype.setTriggersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.ecos_app.Trigger=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Trigger}
 */
proto.ecos_app.Application.prototype.addTriggers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.ecos_app.Trigger, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.clearTriggersList = function() {
  return this.setTriggersList([]);
};


/**
 * optional string creator = 8;
 * @return {string}
 */
proto.ecos_app.Application.prototype.getCreator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setCreator = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string application_ID = 9;
 * @return {string}
 */
proto.ecos_app.Application.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string cluster_name = 10;
 * @return {string}
 */
proto.ecos_app.Application.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 created_time = 11;
 * @return {number}
 */
proto.ecos_app.Application.prototype.getCreatedTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setCreatedTime = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string cluster_ID = 12;
 * @return {string}
 */
proto.ecos_app.Application.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * repeated Task tasks = 13;
 * @return {!Array<!proto.ecos_app.Task>}
 */
proto.ecos_app.Application.prototype.getTasksList = function() {
  return /** @type{!Array<!proto.ecos_app.Task>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ecos_app.Task, 13));
};


/**
 * @param {!Array<!proto.ecos_app.Task>} value
 * @return {!proto.ecos_app.Application} returns this
*/
proto.ecos_app.Application.prototype.setTasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.ecos_app.Task=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Task}
 */
proto.ecos_app.Application.prototype.addTasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.ecos_app.Task, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.clearTasksList = function() {
  return this.setTasksList([]);
};


/**
 * optional string flow_graph_data = 14;
 * @return {string}
 */
proto.ecos_app.Application.prototype.getFlowGraphData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setFlowGraphData = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional bool email_notify = 15;
 * @return {boolean}
 */
proto.ecos_app.Application.prototype.getEmailNotify = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setEmailNotify = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * repeated string email_notify_user_list = 16;
 * @return {!Array<string>}
 */
proto.ecos_app.Application.prototype.getEmailNotifyUserListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setEmailNotifyUserListList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.addEmailNotifyUserList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.clearEmailNotifyUserListList = function() {
  return this.setEmailNotifyUserListList([]);
};


/**
 * optional string comment = 17;
 * @return {string}
 */
proto.ecos_app.Application.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional int64 timeout = 18;
 * @return {number}
 */
proto.ecos_app.Application.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int64 max_retry = 19;
 * @return {number}
 */
proto.ecos_app.Application.prototype.getMaxRetry = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setMaxRetry = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional int64 cur_retry_count = 20;
 * @return {number}
 */
proto.ecos_app.Application.prototype.getCurRetryCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setCurRetryCount = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * repeated string viewers = 21;
 * @return {!Array<string>}
 */
proto.ecos_app.Application.prototype.getViewersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 21));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setViewersList = function(value) {
  return jspb.Message.setField(this, 21, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.addViewers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 21, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.clearViewersList = function() {
  return this.setViewersList([]);
};


/**
 * repeated string editors = 22;
 * @return {!Array<string>}
 */
proto.ecos_app.Application.prototype.getEditorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 22));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setEditorsList = function(value) {
  return jspb.Message.setField(this, 22, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.addEditors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 22, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.clearEditorsList = function() {
  return this.setEditorsList([]);
};


/**
 * repeated string favorited_by = 23;
 * @return {!Array<string>}
 */
proto.ecos_app.Application.prototype.getFavoritedByList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 23));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setFavoritedByList = function(value) {
  return jspb.Message.setField(this, 23, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.addFavoritedBy = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 23, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.clearFavoritedByList = function() {
  return this.setFavoritedByList([]);
};


/**
 * repeated Event system_log = 24;
 * @return {!Array<!proto.ecos_app.Event>}
 */
proto.ecos_app.Application.prototype.getSystemLogList = function() {
  return /** @type{!Array<!proto.ecos_app.Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ecos_app.Event, 24));
};


/**
 * @param {!Array<!proto.ecos_app.Event>} value
 * @return {!proto.ecos_app.Application} returns this
*/
proto.ecos_app.Application.prototype.setSystemLogList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 24, value);
};


/**
 * @param {!proto.ecos_app.Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Event}
 */
proto.ecos_app.Application.prototype.addSystemLog = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 24, opt_value, proto.ecos_app.Event, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.clearSystemLogList = function() {
  return this.setSystemLogList([]);
};


/**
 * optional string tspkg = 25;
 * @return {string}
 */
proto.ecos_app.Application.prototype.getTspkg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Application} returns this
 */
proto.ecos_app.Application.prototype.setTspkg = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.DeleteApplicationRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.DeleteApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.DeleteApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.DeleteApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.DeleteApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.DeleteApplicationRequest}
 */
proto.ecos_app.DeleteApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.DeleteApplicationRequest;
  return proto.ecos_app.DeleteApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.DeleteApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.DeleteApplicationRequest}
 */
proto.ecos_app.DeleteApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addApplicationIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.DeleteApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.DeleteApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.DeleteApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.DeleteApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string application_IDs = 1;
 * @return {!Array<string>}
 */
proto.ecos_app.DeleteApplicationRequest.prototype.getApplicationIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.DeleteApplicationRequest} returns this
 */
proto.ecos_app.DeleteApplicationRequest.prototype.setApplicationIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.DeleteApplicationRequest} returns this
 */
proto.ecos_app.DeleteApplicationRequest.prototype.addApplicationIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.DeleteApplicationRequest} returns this
 */
proto.ecos_app.DeleteApplicationRequest.prototype.clearApplicationIdsList = function() {
  return this.setApplicationIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.DeleteApplicationReply.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.DeleteApplicationReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.DeleteApplicationReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.DeleteApplicationReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.DeleteApplicationReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    succeededList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    failedList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.DeleteApplicationReply}
 */
proto.ecos_app.DeleteApplicationReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.DeleteApplicationReply;
  return proto.ecos_app.DeleteApplicationReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.DeleteApplicationReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.DeleteApplicationReply}
 */
proto.ecos_app.DeleteApplicationReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSucceeded(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFailed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.DeleteApplicationReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.DeleteApplicationReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.DeleteApplicationReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.DeleteApplicationReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSucceededList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getFailedList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string succeeded = 1;
 * @return {!Array<string>}
 */
proto.ecos_app.DeleteApplicationReply.prototype.getSucceededList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.DeleteApplicationReply} returns this
 */
proto.ecos_app.DeleteApplicationReply.prototype.setSucceededList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.DeleteApplicationReply} returns this
 */
proto.ecos_app.DeleteApplicationReply.prototype.addSucceeded = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.DeleteApplicationReply} returns this
 */
proto.ecos_app.DeleteApplicationReply.prototype.clearSucceededList = function() {
  return this.setSucceededList([]);
};


/**
 * repeated string failed = 2;
 * @return {!Array<string>}
 */
proto.ecos_app.DeleteApplicationReply.prototype.getFailedList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.DeleteApplicationReply} returns this
 */
proto.ecos_app.DeleteApplicationReply.prototype.setFailedList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.DeleteApplicationReply} returns this
 */
proto.ecos_app.DeleteApplicationReply.prototype.addFailed = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.DeleteApplicationReply} returns this
 */
proto.ecos_app.DeleteApplicationReply.prototype.clearFailedList = function() {
  return this.setFailedList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.UpdateApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.UpdateApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.UpdateApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.UpdateApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    oldApplicationInfo: (f = msg.getOldApplicationInfo()) && proto.ecos_app.Application.toObject(includeInstance, f),
    updateApplicationInfo: (f = msg.getUpdateApplicationInfo()) && proto.ecos_app.Application.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.UpdateApplicationRequest}
 */
proto.ecos_app.UpdateApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.UpdateApplicationRequest;
  return proto.ecos_app.UpdateApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.UpdateApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.UpdateApplicationRequest}
 */
proto.ecos_app.UpdateApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ecos_app.Application;
      reader.readMessage(value,proto.ecos_app.Application.deserializeBinaryFromReader);
      msg.setOldApplicationInfo(value);
      break;
    case 2:
      var value = new proto.ecos_app.Application;
      reader.readMessage(value,proto.ecos_app.Application.deserializeBinaryFromReader);
      msg.setUpdateApplicationInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.UpdateApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.UpdateApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.UpdateApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.UpdateApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOldApplicationInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ecos_app.Application.serializeBinaryToWriter
    );
  }
  f = message.getUpdateApplicationInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ecos_app.Application.serializeBinaryToWriter
    );
  }
};


/**
 * optional Application old_application_info = 1;
 * @return {?proto.ecos_app.Application}
 */
proto.ecos_app.UpdateApplicationRequest.prototype.getOldApplicationInfo = function() {
  return /** @type{?proto.ecos_app.Application} */ (
    jspb.Message.getWrapperField(this, proto.ecos_app.Application, 1));
};


/**
 * @param {?proto.ecos_app.Application|undefined} value
 * @return {!proto.ecos_app.UpdateApplicationRequest} returns this
*/
proto.ecos_app.UpdateApplicationRequest.prototype.setOldApplicationInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ecos_app.UpdateApplicationRequest} returns this
 */
proto.ecos_app.UpdateApplicationRequest.prototype.clearOldApplicationInfo = function() {
  return this.setOldApplicationInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ecos_app.UpdateApplicationRequest.prototype.hasOldApplicationInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Application update_application_info = 2;
 * @return {?proto.ecos_app.Application}
 */
proto.ecos_app.UpdateApplicationRequest.prototype.getUpdateApplicationInfo = function() {
  return /** @type{?proto.ecos_app.Application} */ (
    jspb.Message.getWrapperField(this, proto.ecos_app.Application, 2));
};


/**
 * @param {?proto.ecos_app.Application|undefined} value
 * @return {!proto.ecos_app.UpdateApplicationRequest} returns this
*/
proto.ecos_app.UpdateApplicationRequest.prototype.setUpdateApplicationInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ecos_app.UpdateApplicationRequest} returns this
 */
proto.ecos_app.UpdateApplicationRequest.prototype.clearUpdateApplicationInfo = function() {
  return this.setUpdateApplicationInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ecos_app.UpdateApplicationRequest.prototype.hasUpdateApplicationInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.UpdateApplicationReply.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.UpdateApplicationReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.UpdateApplicationReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.UpdateApplicationReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.UpdateApplicationReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    application: (f = msg.getApplication()) && proto.ecos_app.Application.toObject(includeInstance, f),
    failedUpdateFieldList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.UpdateApplicationReply}
 */
proto.ecos_app.UpdateApplicationReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.UpdateApplicationReply;
  return proto.ecos_app.UpdateApplicationReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.UpdateApplicationReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.UpdateApplicationReply}
 */
proto.ecos_app.UpdateApplicationReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ecos_app.Application;
      reader.readMessage(value,proto.ecos_app.Application.deserializeBinaryFromReader);
      msg.setApplication(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFailedUpdateField(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.UpdateApplicationReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.UpdateApplicationReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.UpdateApplicationReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.UpdateApplicationReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplication();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ecos_app.Application.serializeBinaryToWriter
    );
  }
  f = message.getFailedUpdateFieldList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional Application application = 1;
 * @return {?proto.ecos_app.Application}
 */
proto.ecos_app.UpdateApplicationReply.prototype.getApplication = function() {
  return /** @type{?proto.ecos_app.Application} */ (
    jspb.Message.getWrapperField(this, proto.ecos_app.Application, 1));
};


/**
 * @param {?proto.ecos_app.Application|undefined} value
 * @return {!proto.ecos_app.UpdateApplicationReply} returns this
*/
proto.ecos_app.UpdateApplicationReply.prototype.setApplication = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ecos_app.UpdateApplicationReply} returns this
 */
proto.ecos_app.UpdateApplicationReply.prototype.clearApplication = function() {
  return this.setApplication(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ecos_app.UpdateApplicationReply.prototype.hasApplication = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string failed_update_field = 2;
 * @return {!Array<string>}
 */
proto.ecos_app.UpdateApplicationReply.prototype.getFailedUpdateFieldList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.UpdateApplicationReply} returns this
 */
proto.ecos_app.UpdateApplicationReply.prototype.setFailedUpdateFieldList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.UpdateApplicationReply} returns this
 */
proto.ecos_app.UpdateApplicationReply.prototype.addFailedUpdateField = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.UpdateApplicationReply} returns this
 */
proto.ecos_app.UpdateApplicationReply.prototype.clearFailedUpdateFieldList = function() {
  return this.setFailedUpdateFieldList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.SuspendTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.SuspendTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.SuspendTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.SuspendTaskRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    executionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    taskName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.SuspendTaskRequest}
 */
proto.ecos_app.SuspendTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.SuspendTaskRequest;
  return proto.ecos_app.SuspendTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.SuspendTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.SuspendTaskRequest}
 */
proto.ecos_app.SuspendTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.SuspendTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.SuspendTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.SuspendTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.SuspendTaskRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExecutionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTaskName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string application_ID = 1;
 * @return {string}
 */
proto.ecos_app.SuspendTaskRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.SuspendTaskRequest} returns this
 */
proto.ecos_app.SuspendTaskRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string execution_ID = 2;
 * @return {string}
 */
proto.ecos_app.SuspendTaskRequest.prototype.getExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.SuspendTaskRequest} returns this
 */
proto.ecos_app.SuspendTaskRequest.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string task_name = 3;
 * @return {string}
 */
proto.ecos_app.SuspendTaskRequest.prototype.getTaskName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.SuspendTaskRequest} returns this
 */
proto.ecos_app.SuspendTaskRequest.prototype.setTaskName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.SuspendTaskReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.SuspendTaskReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.SuspendTaskReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.SuspendTaskReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.SuspendTaskReply}
 */
proto.ecos_app.SuspendTaskReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.SuspendTaskReply;
  return proto.ecos_app.SuspendTaskReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.SuspendTaskReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.SuspendTaskReply}
 */
proto.ecos_app.SuspendTaskReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.SuspendTaskReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.SuspendTaskReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.SuspendTaskReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.SuspendTaskReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ResumeTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ResumeTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ResumeTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ResumeTaskRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    executionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    taskName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ResumeTaskRequest}
 */
proto.ecos_app.ResumeTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ResumeTaskRequest;
  return proto.ecos_app.ResumeTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ResumeTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ResumeTaskRequest}
 */
proto.ecos_app.ResumeTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ResumeTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ResumeTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ResumeTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ResumeTaskRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExecutionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTaskName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string application_ID = 1;
 * @return {string}
 */
proto.ecos_app.ResumeTaskRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ResumeTaskRequest} returns this
 */
proto.ecos_app.ResumeTaskRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string execution_ID = 2;
 * @return {string}
 */
proto.ecos_app.ResumeTaskRequest.prototype.getExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ResumeTaskRequest} returns this
 */
proto.ecos_app.ResumeTaskRequest.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string task_name = 3;
 * @return {string}
 */
proto.ecos_app.ResumeTaskRequest.prototype.getTaskName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ResumeTaskRequest} returns this
 */
proto.ecos_app.ResumeTaskRequest.prototype.setTaskName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ResumeTaskReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ResumeTaskReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ResumeTaskReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ResumeTaskReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ResumeTaskReply}
 */
proto.ecos_app.ResumeTaskReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ResumeTaskReply;
  return proto.ecos_app.ResumeTaskReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ResumeTaskReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ResumeTaskReply}
 */
proto.ecos_app.ResumeTaskReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ResumeTaskReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ResumeTaskReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ResumeTaskReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ResumeTaskReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.RetryTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.RetryTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.RetryTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.RetryTaskRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    taskName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.RetryTaskRequest}
 */
proto.ecos_app.RetryTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.RetryTaskRequest;
  return proto.ecos_app.RetryTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.RetryTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.RetryTaskRequest}
 */
proto.ecos_app.RetryTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.RetryTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.RetryTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.RetryTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.RetryTaskRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTaskName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string execution_ID = 1;
 * @return {string}
 */
proto.ecos_app.RetryTaskRequest.prototype.getExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.RetryTaskRequest} returns this
 */
proto.ecos_app.RetryTaskRequest.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string task_name = 2;
 * @return {string}
 */
proto.ecos_app.RetryTaskRequest.prototype.getTaskName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.RetryTaskRequest} returns this
 */
proto.ecos_app.RetryTaskRequest.prototype.setTaskName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.RetryTaskReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.RetryTaskReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.RetryTaskReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.RetryTaskReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.RetryTaskReply}
 */
proto.ecos_app.RetryTaskReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.RetryTaskReply;
  return proto.ecos_app.RetryTaskReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.RetryTaskReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.RetryTaskReply}
 */
proto.ecos_app.RetryTaskReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.RetryTaskReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.RetryTaskReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.RetryTaskReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.RetryTaskReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.GetApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.GetApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.GetApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.GetApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.GetApplicationRequest}
 */
proto.ecos_app.GetApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.GetApplicationRequest;
  return proto.ecos_app.GetApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.GetApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.GetApplicationRequest}
 */
proto.ecos_app.GetApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.GetApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.GetApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.GetApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.GetApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string application_ID = 1;
 * @return {string}
 */
proto.ecos_app.GetApplicationRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.GetApplicationRequest} returns this
 */
proto.ecos_app.GetApplicationRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.GetApplicationReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.GetApplicationReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.GetApplicationReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.GetApplicationReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.ecos_app.Application.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.GetApplicationReply}
 */
proto.ecos_app.GetApplicationReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.GetApplicationReply;
  return proto.ecos_app.GetApplicationReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.GetApplicationReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.GetApplicationReply}
 */
proto.ecos_app.GetApplicationReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ecos_app.Application;
      reader.readMessage(value,proto.ecos_app.Application.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.GetApplicationReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.GetApplicationReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.GetApplicationReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.GetApplicationReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ecos_app.Application.serializeBinaryToWriter
    );
  }
};


/**
 * optional Application result = 1;
 * @return {?proto.ecos_app.Application}
 */
proto.ecos_app.GetApplicationReply.prototype.getResult = function() {
  return /** @type{?proto.ecos_app.Application} */ (
    jspb.Message.getWrapperField(this, proto.ecos_app.Application, 1));
};


/**
 * @param {?proto.ecos_app.Application|undefined} value
 * @return {!proto.ecos_app.GetApplicationReply} returns this
*/
proto.ecos_app.GetApplicationReply.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ecos_app.GetApplicationReply} returns this
 */
proto.ecos_app.GetApplicationReply.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ecos_app.GetApplicationReply.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.ListApplicationRequest.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ListApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ListApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ListApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    searchField: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clusterName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    triggerTypesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    workloadType: jspb.Message.getFieldWithDefault(msg, 5, ""),
    edittype: jspb.Message.getFieldWithDefault(msg, 6, ""),
    orderByCreateTime: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pageIdx: jspb.Message.getFieldWithDefault(msg, 8, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 9, 0),
    favoritedBy: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ListApplicationRequest}
 */
proto.ecos_app.ListApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ListApplicationRequest;
  return proto.ecos_app.ListApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ListApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ListApplicationRequest}
 */
proto.ecos_app.ListApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchField(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTriggerTypes(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEdittype(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrderByCreateTime(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageIdx(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFavoritedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ListApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ListApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ListApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearchField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getTriggerTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getWorkloadType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEdittype();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOrderByCreateTime();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getPageIdx();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getFavoritedBy();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional string search_field = 1;
 * @return {string}
 */
proto.ecos_app.ListApplicationRequest.prototype.getSearchField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ListApplicationRequest} returns this
 */
proto.ecos_app.ListApplicationRequest.prototype.setSearchField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cluster_name = 2;
 * @return {string}
 */
proto.ecos_app.ListApplicationRequest.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ListApplicationRequest} returns this
 */
proto.ecos_app.ListApplicationRequest.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string tags = 3;
 * @return {!Array<string>}
 */
proto.ecos_app.ListApplicationRequest.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.ListApplicationRequest} returns this
 */
proto.ecos_app.ListApplicationRequest.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ListApplicationRequest} returns this
 */
proto.ecos_app.ListApplicationRequest.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ListApplicationRequest} returns this
 */
proto.ecos_app.ListApplicationRequest.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * repeated string trigger_types = 4;
 * @return {!Array<string>}
 */
proto.ecos_app.ListApplicationRequest.prototype.getTriggerTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.ListApplicationRequest} returns this
 */
proto.ecos_app.ListApplicationRequest.prototype.setTriggerTypesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ListApplicationRequest} returns this
 */
proto.ecos_app.ListApplicationRequest.prototype.addTriggerTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ListApplicationRequest} returns this
 */
proto.ecos_app.ListApplicationRequest.prototype.clearTriggerTypesList = function() {
  return this.setTriggerTypesList([]);
};


/**
 * optional string workload_type = 5;
 * @return {string}
 */
proto.ecos_app.ListApplicationRequest.prototype.getWorkloadType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ListApplicationRequest} returns this
 */
proto.ecos_app.ListApplicationRequest.prototype.setWorkloadType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string editType = 6;
 * @return {string}
 */
proto.ecos_app.ListApplicationRequest.prototype.getEdittype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ListApplicationRequest} returns this
 */
proto.ecos_app.ListApplicationRequest.prototype.setEdittype = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 order_by_create_time = 7;
 * @return {number}
 */
proto.ecos_app.ListApplicationRequest.prototype.getOrderByCreateTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ListApplicationRequest} returns this
 */
proto.ecos_app.ListApplicationRequest.prototype.setOrderByCreateTime = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 page_idx = 8;
 * @return {number}
 */
proto.ecos_app.ListApplicationRequest.prototype.getPageIdx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ListApplicationRequest} returns this
 */
proto.ecos_app.ListApplicationRequest.prototype.setPageIdx = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 page_size = 9;
 * @return {number}
 */
proto.ecos_app.ListApplicationRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ListApplicationRequest} returns this
 */
proto.ecos_app.ListApplicationRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional bool favorited_by = 10;
 * @return {boolean}
 */
proto.ecos_app.ListApplicationRequest.prototype.getFavoritedBy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.ListApplicationRequest} returns this
 */
proto.ecos_app.ListApplicationRequest.prototype.setFavoritedBy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.ListApplicationReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ListApplicationReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ListApplicationReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ListApplicationReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListApplicationReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationInfosList: jspb.Message.toObjectList(msg.getApplicationInfosList(),
    proto.ecos_app.ApplicationInfo.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ListApplicationReply}
 */
proto.ecos_app.ListApplicationReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ListApplicationReply;
  return proto.ecos_app.ListApplicationReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ListApplicationReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ListApplicationReply}
 */
proto.ecos_app.ListApplicationReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ecos_app.ApplicationInfo;
      reader.readMessage(value,proto.ecos_app.ApplicationInfo.deserializeBinaryFromReader);
      msg.addApplicationInfos(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ListApplicationReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ListApplicationReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ListApplicationReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListApplicationReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ecos_app.ApplicationInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated ApplicationInfo application_infos = 1;
 * @return {!Array<!proto.ecos_app.ApplicationInfo>}
 */
proto.ecos_app.ListApplicationReply.prototype.getApplicationInfosList = function() {
  return /** @type{!Array<!proto.ecos_app.ApplicationInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ecos_app.ApplicationInfo, 1));
};


/**
 * @param {!Array<!proto.ecos_app.ApplicationInfo>} value
 * @return {!proto.ecos_app.ListApplicationReply} returns this
*/
proto.ecos_app.ListApplicationReply.prototype.setApplicationInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ecos_app.ApplicationInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ApplicationInfo}
 */
proto.ecos_app.ListApplicationReply.prototype.addApplicationInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ecos_app.ApplicationInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ListApplicationReply} returns this
 */
proto.ecos_app.ListApplicationReply.prototype.clearApplicationInfosList = function() {
  return this.setApplicationInfosList([]);
};


/**
 * optional int32 total = 2;
 * @return {number}
 */
proto.ecos_app.ListApplicationReply.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ListApplicationReply} returns this
 */
proto.ecos_app.ListApplicationReply.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.ApplicationInfo.repeatedFields_ = [5,8,13,14,15,16];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ApplicationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ApplicationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ApplicationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ApplicationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    applicationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workloadType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clusterName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    creator: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createdTime: jspb.Message.getFieldWithDefault(msg, 7, 0),
    triggersList: jspb.Message.toObjectList(msg.getTriggersList(),
    proto.ecos_app.Trigger.toObject, includeInstance),
    comment: jspb.Message.getFieldWithDefault(msg, 9, ""),
    timeout: jspb.Message.getFieldWithDefault(msg, 10, 0),
    maxRetry: jspb.Message.getFieldWithDefault(msg, 11, 0),
    curRetryCount: jspb.Message.getFieldWithDefault(msg, 12, 0),
    viewersList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    editorsList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
    favoritedByList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    emailNotifyUserListList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
    emailNotify: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    tspkg: jspb.Message.getFieldWithDefault(msg, 18, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ApplicationInfo}
 */
proto.ecos_app.ApplicationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ApplicationInfo;
  return proto.ecos_app.ApplicationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ApplicationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ApplicationInfo}
 */
proto.ecos_app.ApplicationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreator(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedTime(value);
      break;
    case 8:
      var value = new proto.ecos_app.Trigger;
      reader.readMessage(value,proto.ecos_app.Trigger.deserializeBinaryFromReader);
      msg.addTriggers(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeout(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxRetry(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurRetryCount(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.addViewers(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addEditors(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addFavoritedBy(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.addEmailNotifyUserList(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailNotify(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setTspkg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ApplicationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ApplicationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ApplicationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ApplicationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkloadType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getCreator();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedTime();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getTriggersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.ecos_app.Trigger.serializeBinaryToWriter
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getMaxRetry();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getCurRetryCount();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getViewersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      13,
      f
    );
  }
  f = message.getEditorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
  f = message.getFavoritedByList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getEmailNotifyUserListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      16,
      f
    );
  }
  f = message.getEmailNotify();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getTspkg();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ecos_app.ApplicationInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string application_ID = 2;
 * @return {string}
 */
proto.ecos_app.ApplicationInfo.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string workload_type = 3;
 * @return {string}
 */
proto.ecos_app.ApplicationInfo.prototype.getWorkloadType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setWorkloadType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string cluster_name = 4;
 * @return {string}
 */
proto.ecos_app.ApplicationInfo.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string tags = 5;
 * @return {!Array<string>}
 */
proto.ecos_app.ApplicationInfo.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string creator = 6;
 * @return {string}
 */
proto.ecos_app.ApplicationInfo.prototype.getCreator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setCreator = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 created_time = 7;
 * @return {number}
 */
proto.ecos_app.ApplicationInfo.prototype.getCreatedTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setCreatedTime = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated Trigger triggers = 8;
 * @return {!Array<!proto.ecos_app.Trigger>}
 */
proto.ecos_app.ApplicationInfo.prototype.getTriggersList = function() {
  return /** @type{!Array<!proto.ecos_app.Trigger>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ecos_app.Trigger, 8));
};


/**
 * @param {!Array<!proto.ecos_app.Trigger>} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
*/
proto.ecos_app.ApplicationInfo.prototype.setTriggersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.ecos_app.Trigger=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Trigger}
 */
proto.ecos_app.ApplicationInfo.prototype.addTriggers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.ecos_app.Trigger, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.clearTriggersList = function() {
  return this.setTriggersList([]);
};


/**
 * optional string comment = 9;
 * @return {string}
 */
proto.ecos_app.ApplicationInfo.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 timeout = 10;
 * @return {number}
 */
proto.ecos_app.ApplicationInfo.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 max_retry = 11;
 * @return {number}
 */
proto.ecos_app.ApplicationInfo.prototype.getMaxRetry = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setMaxRetry = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 cur_retry_count = 12;
 * @return {number}
 */
proto.ecos_app.ApplicationInfo.prototype.getCurRetryCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setCurRetryCount = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * repeated string viewers = 13;
 * @return {!Array<string>}
 */
proto.ecos_app.ApplicationInfo.prototype.getViewersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setViewersList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.addViewers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.clearViewersList = function() {
  return this.setViewersList([]);
};


/**
 * repeated string editors = 14;
 * @return {!Array<string>}
 */
proto.ecos_app.ApplicationInfo.prototype.getEditorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setEditorsList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.addEditors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.clearEditorsList = function() {
  return this.setEditorsList([]);
};


/**
 * repeated string favorited_by = 15;
 * @return {!Array<string>}
 */
proto.ecos_app.ApplicationInfo.prototype.getFavoritedByList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setFavoritedByList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.addFavoritedBy = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.clearFavoritedByList = function() {
  return this.setFavoritedByList([]);
};


/**
 * repeated string email_notify_user_list = 16;
 * @return {!Array<string>}
 */
proto.ecos_app.ApplicationInfo.prototype.getEmailNotifyUserListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setEmailNotifyUserListList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.addEmailNotifyUserList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.clearEmailNotifyUserListList = function() {
  return this.setEmailNotifyUserListList([]);
};


/**
 * optional bool email_notify = 17;
 * @return {boolean}
 */
proto.ecos_app.ApplicationInfo.prototype.getEmailNotify = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setEmailNotify = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional string tspkg = 18;
 * @return {string}
 */
proto.ecos_app.ApplicationInfo.prototype.getTspkg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ApplicationInfo} returns this
 */
proto.ecos_app.ApplicationInfo.prototype.setTspkg = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.TriggeredBy.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.TriggeredBy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.TriggeredBy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.TriggeredBy.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    data: jspb.Message.getFieldWithDefault(msg, 2, ""),
    executionId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.TriggeredBy}
 */
proto.ecos_app.TriggeredBy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.TriggeredBy;
  return proto.ecos_app.TriggeredBy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.TriggeredBy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.TriggeredBy}
 */
proto.ecos_app.TriggeredBy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.TriggeredBy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.TriggeredBy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.TriggeredBy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.TriggeredBy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExecutionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.ecos_app.TriggeredBy.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.TriggeredBy} returns this
 */
proto.ecos_app.TriggeredBy.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string data = 2;
 * @return {string}
 */
proto.ecos_app.TriggeredBy.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.TriggeredBy} returns this
 */
proto.ecos_app.TriggeredBy.prototype.setData = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string execution_ID = 3;
 * @return {string}
 */
proto.ecos_app.TriggeredBy.prototype.getExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.TriggeredBy} returns this
 */
proto.ecos_app.TriggeredBy.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.CreateExecutionRequest.repeatedFields_ = [10,16,17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.CreateExecutionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.CreateExecutionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.CreateExecutionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.CreateExecutionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workloadType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workloadSettings: jspb.Message.getFieldWithDefault(msg, 3, ""),
    input: jspb.Message.getFieldWithDefault(msg, 4, ""),
    environmentVariablesMap: (f = msg.getEnvironmentVariablesMap()) ? f.toObject(includeInstance, undefined) : [],
    useDefaultEnv: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    applicationId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    triggeredBy: (f = msg.getTriggeredBy()) && proto.ecos_app.TriggeredBy.toObject(includeInstance, f),
    emailNotify: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    emailNotifyUserListList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    comment: jspb.Message.getFieldWithDefault(msg, 11, ""),
    timeout: jspb.Message.getFieldWithDefault(msg, 12, 0),
    maxRetry: jspb.Message.getFieldWithDefault(msg, 13, 0),
    clusterId: jspb.Message.getFieldWithDefault(msg, 14, ""),
    clusterName: jspb.Message.getFieldWithDefault(msg, 15, ""),
    viewersList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
    editorsList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f,
    datasetName: jspb.Message.getFieldWithDefault(msg, 18, ""),
    tspkg: jspb.Message.getFieldWithDefault(msg, 19, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.CreateExecutionRequest}
 */
proto.ecos_app.CreateExecutionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.CreateExecutionRequest;
  return proto.ecos_app.CreateExecutionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.CreateExecutionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.CreateExecutionRequest}
 */
proto.ecos_app.CreateExecutionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadSettings(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInput(value);
      break;
    case 5:
      var value = msg.getEnvironmentVariablesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseDefaultEnv(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 8:
      var value = new proto.ecos_app.TriggeredBy;
      reader.readMessage(value,proto.ecos_app.TriggeredBy.deserializeBinaryFromReader);
      msg.setTriggeredBy(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailNotify(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addEmailNotifyUserList(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeout(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxRetry(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.addViewers(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.addEditors(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetName(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setTspkg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.CreateExecutionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.CreateExecutionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.CreateExecutionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.CreateExecutionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkloadType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkloadSettings();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInput();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEnvironmentVariablesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getUseDefaultEnv();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTriggeredBy();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ecos_app.TriggeredBy.serializeBinaryToWriter
    );
  }
  f = message.getEmailNotify();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getEmailNotifyUserListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getMaxRetry();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getViewersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      16,
      f
    );
  }
  f = message.getEditorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      17,
      f
    );
  }
  f = message.getDatasetName();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getTspkg();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workload_type = 2;
 * @return {string}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getWorkloadType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setWorkloadType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string workload_settings = 3;
 * @return {string}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getWorkloadSettings = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setWorkloadSettings = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string input = 4;
 * @return {string}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getInput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setInput = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> environment_variables = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getEnvironmentVariablesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.clearEnvironmentVariablesMap = function() {
  this.getEnvironmentVariablesMap().clear();
  return this;};


/**
 * optional bool use_default_env = 6;
 * @return {boolean}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getUseDefaultEnv = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setUseDefaultEnv = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string application_ID = 7;
 * @return {string}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional TriggeredBy triggered_by = 8;
 * @return {?proto.ecos_app.TriggeredBy}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getTriggeredBy = function() {
  return /** @type{?proto.ecos_app.TriggeredBy} */ (
    jspb.Message.getWrapperField(this, proto.ecos_app.TriggeredBy, 8));
};


/**
 * @param {?proto.ecos_app.TriggeredBy|undefined} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
*/
proto.ecos_app.CreateExecutionRequest.prototype.setTriggeredBy = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.clearTriggeredBy = function() {
  return this.setTriggeredBy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ecos_app.CreateExecutionRequest.prototype.hasTriggeredBy = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool email_notify = 9;
 * @return {boolean}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getEmailNotify = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setEmailNotify = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * repeated string email_notify_user_list = 10;
 * @return {!Array<string>}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getEmailNotifyUserListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setEmailNotifyUserListList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.addEmailNotifyUserList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.clearEmailNotifyUserListList = function() {
  return this.setEmailNotifyUserListList([]);
};


/**
 * optional string comment = 11;
 * @return {string}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int64 timeout = 12;
 * @return {number}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 max_retry = 13;
 * @return {number}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getMaxRetry = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setMaxRetry = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string cluster_ID = 14;
 * @return {string}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string cluster_name = 15;
 * @return {string}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * repeated string viewers = 16;
 * @return {!Array<string>}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getViewersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setViewersList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.addViewers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.clearViewersList = function() {
  return this.setViewersList([]);
};


/**
 * repeated string editors = 17;
 * @return {!Array<string>}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getEditorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setEditorsList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.addEditors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.clearEditorsList = function() {
  return this.setEditorsList([]);
};


/**
 * optional string dataset_name = 18;
 * @return {string}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getDatasetName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setDatasetName = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string tspkg = 19;
 * @return {string}
 */
proto.ecos_app.CreateExecutionRequest.prototype.getTspkg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CreateExecutionRequest} returns this
 */
proto.ecos_app.CreateExecutionRequest.prototype.setTspkg = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.CreateExecutionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.CreateExecutionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.CreateExecutionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.CreateExecutionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.ecos_app.Execution.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.CreateExecutionReply}
 */
proto.ecos_app.CreateExecutionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.CreateExecutionReply;
  return proto.ecos_app.CreateExecutionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.CreateExecutionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.CreateExecutionReply}
 */
proto.ecos_app.CreateExecutionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ecos_app.Execution;
      reader.readMessage(value,proto.ecos_app.Execution.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.CreateExecutionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.CreateExecutionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.CreateExecutionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.CreateExecutionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ecos_app.Execution.serializeBinaryToWriter
    );
  }
};


/**
 * optional Execution result = 1;
 * @return {?proto.ecos_app.Execution}
 */
proto.ecos_app.CreateExecutionReply.prototype.getResult = function() {
  return /** @type{?proto.ecos_app.Execution} */ (
    jspb.Message.getWrapperField(this, proto.ecos_app.Execution, 1));
};


/**
 * @param {?proto.ecos_app.Execution|undefined} value
 * @return {!proto.ecos_app.CreateExecutionReply} returns this
*/
proto.ecos_app.CreateExecutionReply.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ecos_app.CreateExecutionReply} returns this
 */
proto.ecos_app.CreateExecutionReply.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ecos_app.CreateExecutionReply.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeStamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.Event}
 */
proto.ecos_app.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.Event;
  return proto.ecos_app.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.Event}
 */
proto.ecos_app.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeStamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeStamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 time_stamp = 1;
 * @return {number}
 */
proto.ecos_app.Event.prototype.getTimeStamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.Event} returns this
 */
proto.ecos_app.Event.prototype.setTimeStamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.ecos_app.Event.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Event} returns this
 */
proto.ecos_app.Event.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.Execution.repeatedFields_ = [20,23,26,29,30,31];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.Execution.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.Execution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.Execution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Execution.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workloadType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clusterName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    applicationName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    applicationId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    taskName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    creator: jspb.Message.getFieldWithDefault(msg, 8, ""),
    startTime: jspb.Message.getFieldWithDefault(msg, 9, 0),
    finishTime: jspb.Message.getFieldWithDefault(msg, 10, 0),
    workloadSettings: jspb.Message.getFieldWithDefault(msg, 11, ""),
    executionId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    input: jspb.Message.getFieldWithDefault(msg, 13, ""),
    outputMap: (f = msg.getOutputMap()) ? f.toObject(includeInstance, undefined) : [],
    workloadId: jspb.Message.getFieldWithDefault(msg, 15, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 16, ""),
    environmentVariablesMap: (f = msg.getEnvironmentVariablesMap()) ? f.toObject(includeInstance, undefined) : [],
    flowExecutionId: jspb.Message.getFieldWithDefault(msg, 18, ""),
    isSuspended: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    tasksList: jspb.Message.toObjectList(msg.getTasksList(),
    proto.ecos_app.Task.toObject, includeInstance),
    triggeredBy: (f = msg.getTriggeredBy()) && proto.ecos_app.TriggeredBy.toObject(includeInstance, f),
    emailNotify: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    emailNotifyUserListList: (f = jspb.Message.getRepeatedField(msg, 23)) == null ? undefined : f,
    comment: jspb.Message.getFieldWithDefault(msg, 24, ""),
    timeout: jspb.Message.getFieldWithDefault(msg, 25, 0),
    systemLogList: jspb.Message.toObjectList(msg.getSystemLogList(),
    proto.ecos_app.Event.toObject, includeInstance),
    maxRetry: jspb.Message.getFieldWithDefault(msg, 27, 0),
    curRetryCount: jspb.Message.getFieldWithDefault(msg, 28, 0),
    viewersList: (f = jspb.Message.getRepeatedField(msg, 29)) == null ? undefined : f,
    editorsList: (f = jspb.Message.getRepeatedField(msg, 30)) == null ? undefined : f,
    favoritedByList: (f = jspb.Message.getRepeatedField(msg, 31)) == null ? undefined : f,
    datasetName: jspb.Message.getFieldWithDefault(msg, 32, ""),
    tspkg: jspb.Message.getFieldWithDefault(msg, 33, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.Execution}
 */
proto.ecos_app.Execution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.Execution;
  return proto.ecos_app.Execution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.Execution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.Execution}
 */
proto.ecos_app.Execution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreator(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTime(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFinishTime(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadSettings(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setInput(value);
      break;
    case 14:
      var value = msg.getOutputMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadId(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 17:
      var value = msg.getEnvironmentVariablesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlowExecutionId(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSuspended(value);
      break;
    case 20:
      var value = new proto.ecos_app.Task;
      reader.readMessage(value,proto.ecos_app.Task.deserializeBinaryFromReader);
      msg.addTasks(value);
      break;
    case 21:
      var value = new proto.ecos_app.TriggeredBy;
      reader.readMessage(value,proto.ecos_app.TriggeredBy.deserializeBinaryFromReader);
      msg.setTriggeredBy(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailNotify(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.addEmailNotifyUserList(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeout(value);
      break;
    case 26:
      var value = new proto.ecos_app.Event;
      reader.readMessage(value,proto.ecos_app.Event.deserializeBinaryFromReader);
      msg.addSystemLog(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxRetry(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurRetryCount(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.addViewers(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.addEditors(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.addFavoritedBy(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetName(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setTspkg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.Execution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.Execution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.Execution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.Execution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkloadType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getApplicationName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTaskName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCreator();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStartTime();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getFinishTime();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getWorkloadSettings();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getExecutionId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getInput();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getOutputMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(14, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getWorkloadId();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getEnvironmentVariablesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(17, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getFlowExecutionId();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getIsSuspended();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getTasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.ecos_app.Task.serializeBinaryToWriter
    );
  }
  f = message.getTriggeredBy();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.ecos_app.TriggeredBy.serializeBinaryToWriter
    );
  }
  f = message.getEmailNotify();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getEmailNotifyUserListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      23,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeInt64(
      25,
      f
    );
  }
  f = message.getSystemLogList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      26,
      f,
      proto.ecos_app.Event.serializeBinaryToWriter
    );
  }
  f = message.getMaxRetry();
  if (f !== 0) {
    writer.writeInt64(
      27,
      f
    );
  }
  f = message.getCurRetryCount();
  if (f !== 0) {
    writer.writeInt64(
      28,
      f
    );
  }
  f = message.getViewersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      29,
      f
    );
  }
  f = message.getEditorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      30,
      f
    );
  }
  f = message.getFavoritedByList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      31,
      f
    );
  }
  f = message.getDatasetName();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getTspkg();
  if (f.length > 0) {
    writer.writeString(
      33,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string workload_type = 3;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getWorkloadType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setWorkloadType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string cluster_name = 4;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string application_name = 5;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getApplicationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setApplicationName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string application_ID = 6;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string task_name = 7;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getTaskName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setTaskName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string creator = 8;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getCreator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setCreator = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 start_time = 9;
 * @return {number}
 */
proto.ecos_app.Execution.prototype.getStartTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setStartTime = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 finish_time = 10;
 * @return {number}
 */
proto.ecos_app.Execution.prototype.getFinishTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setFinishTime = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string workload_settings = 11;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getWorkloadSettings = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setWorkloadSettings = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string execution_ID = 12;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string input = 13;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getInput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setInput = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * map<string, string> output = 14;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.ecos_app.Execution.prototype.getOutputMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 14, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.clearOutputMap = function() {
  this.getOutputMap().clear();
  return this;};


/**
 * optional string workload_ID = 15;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getWorkloadId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setWorkloadId = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string cluster_ID = 16;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * map<string, string> environment_variables = 17;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.ecos_app.Execution.prototype.getEnvironmentVariablesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 17, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.clearEnvironmentVariablesMap = function() {
  this.getEnvironmentVariablesMap().clear();
  return this;};


/**
 * optional string flow_execution_ID = 18;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getFlowExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setFlowExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional bool is_suspended = 19;
 * @return {boolean}
 */
proto.ecos_app.Execution.prototype.getIsSuspended = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setIsSuspended = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * repeated Task tasks = 20;
 * @return {!Array<!proto.ecos_app.Task>}
 */
proto.ecos_app.Execution.prototype.getTasksList = function() {
  return /** @type{!Array<!proto.ecos_app.Task>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ecos_app.Task, 20));
};


/**
 * @param {!Array<!proto.ecos_app.Task>} value
 * @return {!proto.ecos_app.Execution} returns this
*/
proto.ecos_app.Execution.prototype.setTasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.ecos_app.Task=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Task}
 */
proto.ecos_app.Execution.prototype.addTasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.ecos_app.Task, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.clearTasksList = function() {
  return this.setTasksList([]);
};


/**
 * optional TriggeredBy triggered_by = 21;
 * @return {?proto.ecos_app.TriggeredBy}
 */
proto.ecos_app.Execution.prototype.getTriggeredBy = function() {
  return /** @type{?proto.ecos_app.TriggeredBy} */ (
    jspb.Message.getWrapperField(this, proto.ecos_app.TriggeredBy, 21));
};


/**
 * @param {?proto.ecos_app.TriggeredBy|undefined} value
 * @return {!proto.ecos_app.Execution} returns this
*/
proto.ecos_app.Execution.prototype.setTriggeredBy = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.clearTriggeredBy = function() {
  return this.setTriggeredBy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ecos_app.Execution.prototype.hasTriggeredBy = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional bool email_notify = 22;
 * @return {boolean}
 */
proto.ecos_app.Execution.prototype.getEmailNotify = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setEmailNotify = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * repeated string email_notify_user_list = 23;
 * @return {!Array<string>}
 */
proto.ecos_app.Execution.prototype.getEmailNotifyUserListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 23));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setEmailNotifyUserListList = function(value) {
  return jspb.Message.setField(this, 23, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.addEmailNotifyUserList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 23, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.clearEmailNotifyUserListList = function() {
  return this.setEmailNotifyUserListList([]);
};


/**
 * optional string comment = 24;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional int64 timeout = 25;
 * @return {number}
 */
proto.ecos_app.Execution.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * repeated Event system_log = 26;
 * @return {!Array<!proto.ecos_app.Event>}
 */
proto.ecos_app.Execution.prototype.getSystemLogList = function() {
  return /** @type{!Array<!proto.ecos_app.Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ecos_app.Event, 26));
};


/**
 * @param {!Array<!proto.ecos_app.Event>} value
 * @return {!proto.ecos_app.Execution} returns this
*/
proto.ecos_app.Execution.prototype.setSystemLogList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 26, value);
};


/**
 * @param {!proto.ecos_app.Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Event}
 */
proto.ecos_app.Execution.prototype.addSystemLog = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 26, opt_value, proto.ecos_app.Event, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.clearSystemLogList = function() {
  return this.setSystemLogList([]);
};


/**
 * optional int64 max_retry = 27;
 * @return {number}
 */
proto.ecos_app.Execution.prototype.getMaxRetry = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setMaxRetry = function(value) {
  return jspb.Message.setProto3IntField(this, 27, value);
};


/**
 * optional int64 cur_retry_count = 28;
 * @return {number}
 */
proto.ecos_app.Execution.prototype.getCurRetryCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setCurRetryCount = function(value) {
  return jspb.Message.setProto3IntField(this, 28, value);
};


/**
 * repeated string viewers = 29;
 * @return {!Array<string>}
 */
proto.ecos_app.Execution.prototype.getViewersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 29));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setViewersList = function(value) {
  return jspb.Message.setField(this, 29, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.addViewers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 29, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.clearViewersList = function() {
  return this.setViewersList([]);
};


/**
 * repeated string editors = 30;
 * @return {!Array<string>}
 */
proto.ecos_app.Execution.prototype.getEditorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 30));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setEditorsList = function(value) {
  return jspb.Message.setField(this, 30, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.addEditors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 30, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.clearEditorsList = function() {
  return this.setEditorsList([]);
};


/**
 * repeated string favorited_by = 31;
 * @return {!Array<string>}
 */
proto.ecos_app.Execution.prototype.getFavoritedByList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 31));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setFavoritedByList = function(value) {
  return jspb.Message.setField(this, 31, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.addFavoritedBy = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 31, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.clearFavoritedByList = function() {
  return this.setFavoritedByList([]);
};


/**
 * optional string dataset_name = 32;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getDatasetName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setDatasetName = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional string tspkg = 33;
 * @return {string}
 */
proto.ecos_app.Execution.prototype.getTspkg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.Execution} returns this
 */
proto.ecos_app.Execution.prototype.setTspkg = function(value) {
  return jspb.Message.setProto3StringField(this, 33, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.DeleteExecutionRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.DeleteExecutionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.DeleteExecutionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.DeleteExecutionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.DeleteExecutionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.DeleteExecutionRequest}
 */
proto.ecos_app.DeleteExecutionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.DeleteExecutionRequest;
  return proto.ecos_app.DeleteExecutionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.DeleteExecutionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.DeleteExecutionRequest}
 */
proto.ecos_app.DeleteExecutionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addExecutionIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.DeleteExecutionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.DeleteExecutionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.DeleteExecutionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.DeleteExecutionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string execution_IDs = 1;
 * @return {!Array<string>}
 */
proto.ecos_app.DeleteExecutionRequest.prototype.getExecutionIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.DeleteExecutionRequest} returns this
 */
proto.ecos_app.DeleteExecutionRequest.prototype.setExecutionIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.DeleteExecutionRequest} returns this
 */
proto.ecos_app.DeleteExecutionRequest.prototype.addExecutionIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.DeleteExecutionRequest} returns this
 */
proto.ecos_app.DeleteExecutionRequest.prototype.clearExecutionIdsList = function() {
  return this.setExecutionIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.DeleteExecutionReply.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.DeleteExecutionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.DeleteExecutionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.DeleteExecutionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.DeleteExecutionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    succeededList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    failedList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.DeleteExecutionReply}
 */
proto.ecos_app.DeleteExecutionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.DeleteExecutionReply;
  return proto.ecos_app.DeleteExecutionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.DeleteExecutionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.DeleteExecutionReply}
 */
proto.ecos_app.DeleteExecutionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSucceeded(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFailed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.DeleteExecutionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.DeleteExecutionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.DeleteExecutionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.DeleteExecutionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSucceededList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getFailedList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string succeeded = 1;
 * @return {!Array<string>}
 */
proto.ecos_app.DeleteExecutionReply.prototype.getSucceededList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.DeleteExecutionReply} returns this
 */
proto.ecos_app.DeleteExecutionReply.prototype.setSucceededList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.DeleteExecutionReply} returns this
 */
proto.ecos_app.DeleteExecutionReply.prototype.addSucceeded = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.DeleteExecutionReply} returns this
 */
proto.ecos_app.DeleteExecutionReply.prototype.clearSucceededList = function() {
  return this.setSucceededList([]);
};


/**
 * repeated string failed = 2;
 * @return {!Array<string>}
 */
proto.ecos_app.DeleteExecutionReply.prototype.getFailedList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.DeleteExecutionReply} returns this
 */
proto.ecos_app.DeleteExecutionReply.prototype.setFailedList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.DeleteExecutionReply} returns this
 */
proto.ecos_app.DeleteExecutionReply.prototype.addFailed = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.DeleteExecutionReply} returns this
 */
proto.ecos_app.DeleteExecutionReply.prototype.clearFailedList = function() {
  return this.setFailedList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.KillExecutionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.KillExecutionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.KillExecutionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.KillExecutionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.KillExecutionRequest}
 */
proto.ecos_app.KillExecutionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.KillExecutionRequest;
  return proto.ecos_app.KillExecutionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.KillExecutionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.KillExecutionRequest}
 */
proto.ecos_app.KillExecutionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.KillExecutionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.KillExecutionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.KillExecutionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.KillExecutionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string execution_ID = 1;
 * @return {string}
 */
proto.ecos_app.KillExecutionRequest.prototype.getExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.KillExecutionRequest} returns this
 */
proto.ecos_app.KillExecutionRequest.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.KillExecutionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.KillExecutionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.KillExecutionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.KillExecutionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.KillExecutionReply}
 */
proto.ecos_app.KillExecutionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.KillExecutionReply;
  return proto.ecos_app.KillExecutionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.KillExecutionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.KillExecutionReply}
 */
proto.ecos_app.KillExecutionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.KillExecutionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.KillExecutionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.KillExecutionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.KillExecutionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string execution_name = 1;
 * @return {string}
 */
proto.ecos_app.KillExecutionReply.prototype.getExecutionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.KillExecutionReply} returns this
 */
proto.ecos_app.KillExecutionReply.prototype.setExecutionName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.GetExecutionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.GetExecutionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.GetExecutionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.GetExecutionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.GetExecutionRequest}
 */
proto.ecos_app.GetExecutionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.GetExecutionRequest;
  return proto.ecos_app.GetExecutionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.GetExecutionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.GetExecutionRequest}
 */
proto.ecos_app.GetExecutionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.GetExecutionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.GetExecutionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.GetExecutionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.GetExecutionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string execution_ID = 1;
 * @return {string}
 */
proto.ecos_app.GetExecutionRequest.prototype.getExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.GetExecutionRequest} returns this
 */
proto.ecos_app.GetExecutionRequest.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.GetExecutionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.GetExecutionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.GetExecutionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.GetExecutionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.ecos_app.Execution.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.GetExecutionReply}
 */
proto.ecos_app.GetExecutionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.GetExecutionReply;
  return proto.ecos_app.GetExecutionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.GetExecutionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.GetExecutionReply}
 */
proto.ecos_app.GetExecutionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ecos_app.Execution;
      reader.readMessage(value,proto.ecos_app.Execution.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.GetExecutionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.GetExecutionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.GetExecutionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.GetExecutionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ecos_app.Execution.serializeBinaryToWriter
    );
  }
};


/**
 * optional Execution result = 1;
 * @return {?proto.ecos_app.Execution}
 */
proto.ecos_app.GetExecutionReply.prototype.getResult = function() {
  return /** @type{?proto.ecos_app.Execution} */ (
    jspb.Message.getWrapperField(this, proto.ecos_app.Execution, 1));
};


/**
 * @param {?proto.ecos_app.Execution|undefined} value
 * @return {!proto.ecos_app.GetExecutionReply} returns this
*/
proto.ecos_app.GetExecutionReply.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ecos_app.GetExecutionReply} returns this
 */
proto.ecos_app.GetExecutionReply.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ecos_app.GetExecutionReply.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.ListExecutionRequest.repeatedFields_ = [2,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ListExecutionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ListExecutionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ListExecutionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListExecutionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    searchField: jspb.Message.getFieldWithDefault(msg, 1, ""),
    statusList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    workloadType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clusterName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    applicationId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    edittype: jspb.Message.getFieldWithDefault(msg, 6, ""),
    orderField: jspb.Message.getFieldWithDefault(msg, 7, ""),
    orderBy: jspb.Message.getFieldWithDefault(msg, 8, 0),
    pageIdx: jspb.Message.getFieldWithDefault(msg, 9, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 10, 0),
    triggeredByList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    flowApplicationId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    taskName: jspb.Message.getFieldWithDefault(msg, 13, ""),
    favoritedBy: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    datasetName: jspb.Message.getFieldWithDefault(msg, 15, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ListExecutionRequest}
 */
proto.ecos_app.ListExecutionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ListExecutionRequest;
  return proto.ecos_app.ListExecutionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ListExecutionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ListExecutionRequest}
 */
proto.ecos_app.ListExecutionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchField(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEdittype(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderField(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrderBy(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageIdx(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addTriggeredBy(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlowApplicationId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskName(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFavoritedBy(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ListExecutionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ListExecutionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ListExecutionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListExecutionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearchField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatusList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getWorkloadType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEdittype();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOrderField();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOrderBy();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getPageIdx();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getTriggeredByList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getFlowApplicationId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getTaskName();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getFavoritedBy();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getDatasetName();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * optional string search_field = 1;
 * @return {string}
 */
proto.ecos_app.ListExecutionRequest.prototype.getSearchField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.setSearchField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string status = 2;
 * @return {!Array<string>}
 */
proto.ecos_app.ListExecutionRequest.prototype.getStatusList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.setStatusList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.addStatus = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.clearStatusList = function() {
  return this.setStatusList([]);
};


/**
 * optional string workload_type = 3;
 * @return {string}
 */
proto.ecos_app.ListExecutionRequest.prototype.getWorkloadType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.setWorkloadType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string cluster_name = 4;
 * @return {string}
 */
proto.ecos_app.ListExecutionRequest.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string application_ID = 5;
 * @return {string}
 */
proto.ecos_app.ListExecutionRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string editType = 6;
 * @return {string}
 */
proto.ecos_app.ListExecutionRequest.prototype.getEdittype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.setEdittype = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string order_field = 7;
 * @return {string}
 */
proto.ecos_app.ListExecutionRequest.prototype.getOrderField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.setOrderField = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 order_by = 8;
 * @return {number}
 */
proto.ecos_app.ListExecutionRequest.prototype.getOrderBy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.setOrderBy = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 page_idx = 9;
 * @return {number}
 */
proto.ecos_app.ListExecutionRequest.prototype.getPageIdx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.setPageIdx = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 page_size = 10;
 * @return {number}
 */
proto.ecos_app.ListExecutionRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * repeated string triggered_by = 11;
 * @return {!Array<string>}
 */
proto.ecos_app.ListExecutionRequest.prototype.getTriggeredByList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.setTriggeredByList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.addTriggeredBy = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.clearTriggeredByList = function() {
  return this.setTriggeredByList([]);
};


/**
 * optional string flow_application_ID = 12;
 * @return {string}
 */
proto.ecos_app.ListExecutionRequest.prototype.getFlowApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.setFlowApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string task_name = 13;
 * @return {string}
 */
proto.ecos_app.ListExecutionRequest.prototype.getTaskName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.setTaskName = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional bool favorited_by = 14;
 * @return {boolean}
 */
proto.ecos_app.ListExecutionRequest.prototype.getFavoritedBy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.setFavoritedBy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional string dataset_name = 15;
 * @return {string}
 */
proto.ecos_app.ListExecutionRequest.prototype.getDatasetName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ListExecutionRequest} returns this
 */
proto.ecos_app.ListExecutionRequest.prototype.setDatasetName = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.ListExecutionReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ListExecutionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ListExecutionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ListExecutionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListExecutionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionInfosList: jspb.Message.toObjectList(msg.getExecutionInfosList(),
    proto.ecos_app.ExecutionInfo.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ListExecutionReply}
 */
proto.ecos_app.ListExecutionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ListExecutionReply;
  return proto.ecos_app.ListExecutionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ListExecutionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ListExecutionReply}
 */
proto.ecos_app.ListExecutionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ecos_app.ExecutionInfo;
      reader.readMessage(value,proto.ecos_app.ExecutionInfo.deserializeBinaryFromReader);
      msg.addExecutionInfos(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ListExecutionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ListExecutionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ListExecutionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListExecutionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ecos_app.ExecutionInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated ExecutionInfo execution_infos = 1;
 * @return {!Array<!proto.ecos_app.ExecutionInfo>}
 */
proto.ecos_app.ListExecutionReply.prototype.getExecutionInfosList = function() {
  return /** @type{!Array<!proto.ecos_app.ExecutionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ecos_app.ExecutionInfo, 1));
};


/**
 * @param {!Array<!proto.ecos_app.ExecutionInfo>} value
 * @return {!proto.ecos_app.ListExecutionReply} returns this
*/
proto.ecos_app.ListExecutionReply.prototype.setExecutionInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ecos_app.ExecutionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ExecutionInfo}
 */
proto.ecos_app.ListExecutionReply.prototype.addExecutionInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ecos_app.ExecutionInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ListExecutionReply} returns this
 */
proto.ecos_app.ListExecutionReply.prototype.clearExecutionInfosList = function() {
  return this.setExecutionInfosList([]);
};


/**
 * optional int32 total = 2;
 * @return {number}
 */
proto.ecos_app.ListExecutionReply.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ListExecutionReply} returns this
 */
proto.ecos_app.ListExecutionReply.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.ExecutionInfo.repeatedFields_ = [24,25,26,27,29];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ExecutionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ExecutionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ExecutionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ExecutionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    executionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, ""),
    workloadType: jspb.Message.getFieldWithDefault(msg, 4, ""),
    workloadId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    clusterName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    applicationId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    applicationName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    creator: jspb.Message.getFieldWithDefault(msg, 10, ""),
    startTime: jspb.Message.getFieldWithDefault(msg, 11, 0),
    finishTime: jspb.Message.getFieldWithDefault(msg, 12, 0),
    triggeredBy: (f = msg.getTriggeredBy()) && proto.ecos_app.TriggeredBy.toObject(includeInstance, f),
    isSuspended: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    succeededTaskCount: jspb.Message.getFieldWithDefault(msg, 15, 0),
    failedTaskCount: jspb.Message.getFieldWithDefault(msg, 16, 0),
    errorTaskCount: jspb.Message.getFieldWithDefault(msg, 17, 0),
    startedTaskCount: jspb.Message.getFieldWithDefault(msg, 18, 0),
    suspendedTaskCount: jspb.Message.getFieldWithDefault(msg, 19, 0),
    noneTaskCount: jspb.Message.getFieldWithDefault(msg, 20, 0),
    timeout: jspb.Message.getFieldWithDefault(msg, 21, 0),
    maxRetry: jspb.Message.getFieldWithDefault(msg, 22, 0),
    curRetryCount: jspb.Message.getFieldWithDefault(msg, 23, 0),
    viewersList: (f = jspb.Message.getRepeatedField(msg, 24)) == null ? undefined : f,
    editorsList: (f = jspb.Message.getRepeatedField(msg, 25)) == null ? undefined : f,
    tasksList: jspb.Message.toObjectList(msg.getTasksList(),
    proto.ecos_app.Task.toObject, includeInstance),
    favoritedByList: (f = jspb.Message.getRepeatedField(msg, 27)) == null ? undefined : f,
    datasetName: jspb.Message.getFieldWithDefault(msg, 28, ""),
    emailNotifyUserListList: (f = jspb.Message.getRepeatedField(msg, 29)) == null ? undefined : f,
    emailNotify: jspb.Message.getBooleanFieldWithDefault(msg, 30, false),
    tspkg: jspb.Message.getFieldWithDefault(msg, 31, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ExecutionInfo}
 */
proto.ecos_app.ExecutionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ExecutionInfo;
  return proto.ecos_app.ExecutionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ExecutionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ExecutionInfo}
 */
proto.ecos_app.ExecutionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationName(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreator(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTime(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFinishTime(value);
      break;
    case 13:
      var value = new proto.ecos_app.TriggeredBy;
      reader.readMessage(value,proto.ecos_app.TriggeredBy.deserializeBinaryFromReader);
      msg.setTriggeredBy(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSuspended(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSucceededTaskCount(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFailedTaskCount(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrorTaskCount(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartedTaskCount(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSuspendedTaskCount(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNoneTaskCount(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeout(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxRetry(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurRetryCount(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.addViewers(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.addEditors(value);
      break;
    case 26:
      var value = new proto.ecos_app.Task;
      reader.readMessage(value,proto.ecos_app.Task.deserializeBinaryFromReader);
      msg.addTasks(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.addFavoritedBy(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetName(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.addEmailNotifyUserList(value);
      break;
    case 30:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailNotify(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.setTspkg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ExecutionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ExecutionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ExecutionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ExecutionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExecutionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWorkloadType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWorkloadId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getApplicationName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreator();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getStartTime();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getFinishTime();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getTriggeredBy();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.ecos_app.TriggeredBy.serializeBinaryToWriter
    );
  }
  f = message.getIsSuspended();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getSucceededTaskCount();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getFailedTaskCount();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getErrorTaskCount();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getStartedTaskCount();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getSuspendedTaskCount();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = message.getNoneTaskCount();
  if (f !== 0) {
    writer.writeInt32(
      20,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeInt64(
      21,
      f
    );
  }
  f = message.getMaxRetry();
  if (f !== 0) {
    writer.writeInt64(
      22,
      f
    );
  }
  f = message.getCurRetryCount();
  if (f !== 0) {
    writer.writeInt64(
      23,
      f
    );
  }
  f = message.getViewersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      24,
      f
    );
  }
  f = message.getEditorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      25,
      f
    );
  }
  f = message.getTasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      26,
      f,
      proto.ecos_app.Task.serializeBinaryToWriter
    );
  }
  f = message.getFavoritedByList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      27,
      f
    );
  }
  f = message.getDatasetName();
  if (f.length > 0) {
    writer.writeString(
      28,
      f
    );
  }
  f = message.getEmailNotifyUserListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      29,
      f
    );
  }
  f = message.getEmailNotify();
  if (f) {
    writer.writeBool(
      30,
      f
    );
  }
  f = message.getTspkg();
  if (f.length > 0) {
    writer.writeString(
      31,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ecos_app.ExecutionInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string execution_ID = 2;
 * @return {string}
 */
proto.ecos_app.ExecutionInfo.prototype.getExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.ecos_app.ExecutionInfo.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string workload_type = 4;
 * @return {string}
 */
proto.ecos_app.ExecutionInfo.prototype.getWorkloadType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setWorkloadType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string workload_ID = 5;
 * @return {string}
 */
proto.ecos_app.ExecutionInfo.prototype.getWorkloadId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setWorkloadId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string cluster_ID = 6;
 * @return {string}
 */
proto.ecos_app.ExecutionInfo.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string cluster_name = 7;
 * @return {string}
 */
proto.ecos_app.ExecutionInfo.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string application_ID = 8;
 * @return {string}
 */
proto.ecos_app.ExecutionInfo.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string application_name = 9;
 * @return {string}
 */
proto.ecos_app.ExecutionInfo.prototype.getApplicationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setApplicationName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string creator = 10;
 * @return {string}
 */
proto.ecos_app.ExecutionInfo.prototype.getCreator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setCreator = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 start_time = 11;
 * @return {number}
 */
proto.ecos_app.ExecutionInfo.prototype.getStartTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setStartTime = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 finish_time = 12;
 * @return {number}
 */
proto.ecos_app.ExecutionInfo.prototype.getFinishTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setFinishTime = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional TriggeredBy triggered_by = 13;
 * @return {?proto.ecos_app.TriggeredBy}
 */
proto.ecos_app.ExecutionInfo.prototype.getTriggeredBy = function() {
  return /** @type{?proto.ecos_app.TriggeredBy} */ (
    jspb.Message.getWrapperField(this, proto.ecos_app.TriggeredBy, 13));
};


/**
 * @param {?proto.ecos_app.TriggeredBy|undefined} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
*/
proto.ecos_app.ExecutionInfo.prototype.setTriggeredBy = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.clearTriggeredBy = function() {
  return this.setTriggeredBy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ecos_app.ExecutionInfo.prototype.hasTriggeredBy = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool is_suspended = 14;
 * @return {boolean}
 */
proto.ecos_app.ExecutionInfo.prototype.getIsSuspended = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setIsSuspended = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional int32 succeeded_task_count = 15;
 * @return {number}
 */
proto.ecos_app.ExecutionInfo.prototype.getSucceededTaskCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setSucceededTaskCount = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional int32 failed_task_count = 16;
 * @return {number}
 */
proto.ecos_app.ExecutionInfo.prototype.getFailedTaskCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setFailedTaskCount = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int32 error_task_count = 17;
 * @return {number}
 */
proto.ecos_app.ExecutionInfo.prototype.getErrorTaskCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setErrorTaskCount = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional int32 started_task_count = 18;
 * @return {number}
 */
proto.ecos_app.ExecutionInfo.prototype.getStartedTaskCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setStartedTaskCount = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int32 suspended_task_count = 19;
 * @return {number}
 */
proto.ecos_app.ExecutionInfo.prototype.getSuspendedTaskCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setSuspendedTaskCount = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional int32 none_task_count = 20;
 * @return {number}
 */
proto.ecos_app.ExecutionInfo.prototype.getNoneTaskCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setNoneTaskCount = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional int64 timeout = 21;
 * @return {number}
 */
proto.ecos_app.ExecutionInfo.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional int64 max_retry = 22;
 * @return {number}
 */
proto.ecos_app.ExecutionInfo.prototype.getMaxRetry = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setMaxRetry = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional int64 cur_retry_count = 23;
 * @return {number}
 */
proto.ecos_app.ExecutionInfo.prototype.getCurRetryCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setCurRetryCount = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * repeated string viewers = 24;
 * @return {!Array<string>}
 */
proto.ecos_app.ExecutionInfo.prototype.getViewersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 24));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setViewersList = function(value) {
  return jspb.Message.setField(this, 24, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.addViewers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 24, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.clearViewersList = function() {
  return this.setViewersList([]);
};


/**
 * repeated string editors = 25;
 * @return {!Array<string>}
 */
proto.ecos_app.ExecutionInfo.prototype.getEditorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 25));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setEditorsList = function(value) {
  return jspb.Message.setField(this, 25, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.addEditors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 25, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.clearEditorsList = function() {
  return this.setEditorsList([]);
};


/**
 * repeated Task tasks = 26;
 * @return {!Array<!proto.ecos_app.Task>}
 */
proto.ecos_app.ExecutionInfo.prototype.getTasksList = function() {
  return /** @type{!Array<!proto.ecos_app.Task>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ecos_app.Task, 26));
};


/**
 * @param {!Array<!proto.ecos_app.Task>} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
*/
proto.ecos_app.ExecutionInfo.prototype.setTasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 26, value);
};


/**
 * @param {!proto.ecos_app.Task=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.Task}
 */
proto.ecos_app.ExecutionInfo.prototype.addTasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 26, opt_value, proto.ecos_app.Task, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.clearTasksList = function() {
  return this.setTasksList([]);
};


/**
 * repeated string favorited_by = 27;
 * @return {!Array<string>}
 */
proto.ecos_app.ExecutionInfo.prototype.getFavoritedByList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 27));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setFavoritedByList = function(value) {
  return jspb.Message.setField(this, 27, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.addFavoritedBy = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 27, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.clearFavoritedByList = function() {
  return this.setFavoritedByList([]);
};


/**
 * optional string dataset_name = 28;
 * @return {string}
 */
proto.ecos_app.ExecutionInfo.prototype.getDatasetName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 28, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setDatasetName = function(value) {
  return jspb.Message.setProto3StringField(this, 28, value);
};


/**
 * repeated string email_notify_user_list = 29;
 * @return {!Array<string>}
 */
proto.ecos_app.ExecutionInfo.prototype.getEmailNotifyUserListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 29));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setEmailNotifyUserListList = function(value) {
  return jspb.Message.setField(this, 29, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.addEmailNotifyUserList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 29, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.clearEmailNotifyUserListList = function() {
  return this.setEmailNotifyUserListList([]);
};


/**
 * optional bool email_notify = 30;
 * @return {boolean}
 */
proto.ecos_app.ExecutionInfo.prototype.getEmailNotify = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 30, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setEmailNotify = function(value) {
  return jspb.Message.setProto3BooleanField(this, 30, value);
};


/**
 * optional string tspkg = 31;
 * @return {string}
 */
proto.ecos_app.ExecutionInfo.prototype.getTspkg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ExecutionInfo} returns this
 */
proto.ecos_app.ExecutionInfo.prototype.setTspkg = function(value) {
  return jspb.Message.setProto3StringField(this, 31, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.GetInputRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.GetInputRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.GetInputRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.GetInputRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.GetInputRequest}
 */
proto.ecos_app.GetInputRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.GetInputRequest;
  return proto.ecos_app.GetInputRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.GetInputRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.GetInputRequest}
 */
proto.ecos_app.GetInputRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.GetInputRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.GetInputRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.GetInputRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.GetInputRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string execution_ID = 1;
 * @return {string}
 */
proto.ecos_app.GetInputRequest.prototype.getExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.GetInputRequest} returns this
 */
proto.ecos_app.GetInputRequest.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.GetInputReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.GetInputReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.GetInputReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.GetInputReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    input: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.GetInputReply}
 */
proto.ecos_app.GetInputReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.GetInputReply;
  return proto.ecos_app.GetInputReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.GetInputReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.GetInputReply}
 */
proto.ecos_app.GetInputReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.GetInputReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.GetInputReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.GetInputReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.GetInputReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInput();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Input = 1;
 * @return {string}
 */
proto.ecos_app.GetInputReply.prototype.getInput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.GetInputReply} returns this
 */
proto.ecos_app.GetInputReply.prototype.setInput = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.WriteOutputRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.WriteOutputRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.WriteOutputRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.WriteOutputRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    podHostname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    output: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.WriteOutputRequest}
 */
proto.ecos_app.WriteOutputRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.WriteOutputRequest;
  return proto.ecos_app.WriteOutputRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.WriteOutputRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.WriteOutputRequest}
 */
proto.ecos_app.WriteOutputRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPodHostname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.WriteOutputRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.WriteOutputRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.WriteOutputRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.WriteOutputRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPodHostname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOutput();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string execution_ID = 1;
 * @return {string}
 */
proto.ecos_app.WriteOutputRequest.prototype.getExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.WriteOutputRequest} returns this
 */
proto.ecos_app.WriteOutputRequest.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string pod_hostname = 2;
 * @return {string}
 */
proto.ecos_app.WriteOutputRequest.prototype.getPodHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.WriteOutputRequest} returns this
 */
proto.ecos_app.WriteOutputRequest.prototype.setPodHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string output = 3;
 * @return {string}
 */
proto.ecos_app.WriteOutputRequest.prototype.getOutput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.WriteOutputRequest} returns this
 */
proto.ecos_app.WriteOutputRequest.prototype.setOutput = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.WriteOutputReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.WriteOutputReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.WriteOutputReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.WriteOutputReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.WriteOutputReply}
 */
proto.ecos_app.WriteOutputReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.WriteOutputReply;
  return proto.ecos_app.WriteOutputReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.WriteOutputReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.WriteOutputReply}
 */
proto.ecos_app.WriteOutputReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.WriteOutputReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.WriteOutputReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.WriteOutputReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.WriteOutputReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ListTagRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ListTagRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ListTagRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListTagRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ListTagRequest}
 */
proto.ecos_app.ListTagRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ListTagRequest;
  return proto.ecos_app.ListTagRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ListTagRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ListTagRequest}
 */
proto.ecos_app.ListTagRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ListTagRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ListTagRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ListTagRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListTagRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.ListTagReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ListTagReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ListTagReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ListTagReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListTagReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    total: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ListTagReply}
 */
proto.ecos_app.ListTagReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ListTagReply;
  return proto.ecos_app.ListTagReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ListTagReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ListTagReply}
 */
proto.ecos_app.ListTagReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ListTagReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ListTagReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ListTagReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListTagReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated string tags = 1;
 * @return {!Array<string>}
 */
proto.ecos_app.ListTagReply.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.ListTagReply} returns this
 */
proto.ecos_app.ListTagReply.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ListTagReply} returns this
 */
proto.ecos_app.ListTagReply.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ListTagReply} returns this
 */
proto.ecos_app.ListTagReply.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional int32 total = 2;
 * @return {number}
 */
proto.ecos_app.ListTagReply.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.ListTagReply} returns this
 */
proto.ecos_app.ListTagReply.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.UpdateTriggerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.UpdateTriggerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.UpdateTriggerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.UpdateTriggerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    triggerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    turnedOn: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.UpdateTriggerRequest}
 */
proto.ecos_app.UpdateTriggerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.UpdateTriggerRequest;
  return proto.ecos_app.UpdateTriggerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.UpdateTriggerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.UpdateTriggerRequest}
 */
proto.ecos_app.UpdateTriggerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTurnedOn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.UpdateTriggerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.UpdateTriggerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.UpdateTriggerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.UpdateTriggerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTriggerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTurnedOn();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string trigger_ID = 1;
 * @return {string}
 */
proto.ecos_app.UpdateTriggerRequest.prototype.getTriggerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.UpdateTriggerRequest} returns this
 */
proto.ecos_app.UpdateTriggerRequest.prototype.setTriggerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool turned_on = 2;
 * @return {boolean}
 */
proto.ecos_app.UpdateTriggerRequest.prototype.getTurnedOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.UpdateTriggerRequest} returns this
 */
proto.ecos_app.UpdateTriggerRequest.prototype.setTurnedOn = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.UpdateTriggerReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.UpdateTriggerReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.UpdateTriggerReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.UpdateTriggerReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    triggerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currentStatus: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.UpdateTriggerReply}
 */
proto.ecos_app.UpdateTriggerReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.UpdateTriggerReply;
  return proto.ecos_app.UpdateTriggerReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.UpdateTriggerReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.UpdateTriggerReply}
 */
proto.ecos_app.UpdateTriggerReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCurrentStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.UpdateTriggerReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.UpdateTriggerReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.UpdateTriggerReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.UpdateTriggerReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTriggerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrentStatus();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string trigger_ID = 1;
 * @return {string}
 */
proto.ecos_app.UpdateTriggerReply.prototype.getTriggerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.UpdateTriggerReply} returns this
 */
proto.ecos_app.UpdateTriggerReply.prototype.setTriggerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool current_status = 2;
 * @return {boolean}
 */
proto.ecos_app.UpdateTriggerReply.prototype.getCurrentStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.UpdateTriggerReply} returns this
 */
proto.ecos_app.UpdateTriggerReply.prototype.setCurrentStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ValidateCronRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ValidateCronRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ValidateCronRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ValidateCronRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ValidateCronRequest}
 */
proto.ecos_app.ValidateCronRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ValidateCronRequest;
  return proto.ecos_app.ValidateCronRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ValidateCronRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ValidateCronRequest}
 */
proto.ecos_app.ValidateCronRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ValidateCronRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ValidateCronRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ValidateCronRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ValidateCronRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string data = 1;
 * @return {string}
 */
proto.ecos_app.ValidateCronRequest.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ValidateCronRequest} returns this
 */
proto.ecos_app.ValidateCronRequest.prototype.setData = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ValidateCronReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ValidateCronReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ValidateCronReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ValidateCronReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ValidateCronReply}
 */
proto.ecos_app.ValidateCronReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ValidateCronReply;
  return proto.ecos_app.ValidateCronReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ValidateCronReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ValidateCronReply}
 */
proto.ecos_app.ValidateCronReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ValidateCronReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ValidateCronReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ValidateCronReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ValidateCronReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.UpdateEmailNotifyRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.UpdateEmailNotifyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.UpdateEmailNotifyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.UpdateEmailNotifyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.UpdateEmailNotifyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    executionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    emailNotifyUserListList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    emailNotify: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.UpdateEmailNotifyRequest}
 */
proto.ecos_app.UpdateEmailNotifyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.UpdateEmailNotifyRequest;
  return proto.ecos_app.UpdateEmailNotifyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.UpdateEmailNotifyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.UpdateEmailNotifyRequest}
 */
proto.ecos_app.UpdateEmailNotifyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addEmailNotifyUserList(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailNotify(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.UpdateEmailNotifyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.UpdateEmailNotifyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.UpdateEmailNotifyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.UpdateEmailNotifyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExecutionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmailNotifyUserListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getEmailNotify();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string application_ID = 1;
 * @return {string}
 */
proto.ecos_app.UpdateEmailNotifyRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.UpdateEmailNotifyRequest} returns this
 */
proto.ecos_app.UpdateEmailNotifyRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string execution_ID = 2;
 * @return {string}
 */
proto.ecos_app.UpdateEmailNotifyRequest.prototype.getExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.UpdateEmailNotifyRequest} returns this
 */
proto.ecos_app.UpdateEmailNotifyRequest.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string email_notify_user_list = 3;
 * @return {!Array<string>}
 */
proto.ecos_app.UpdateEmailNotifyRequest.prototype.getEmailNotifyUserListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.UpdateEmailNotifyRequest} returns this
 */
proto.ecos_app.UpdateEmailNotifyRequest.prototype.setEmailNotifyUserListList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.UpdateEmailNotifyRequest} returns this
 */
proto.ecos_app.UpdateEmailNotifyRequest.prototype.addEmailNotifyUserList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.UpdateEmailNotifyRequest} returns this
 */
proto.ecos_app.UpdateEmailNotifyRequest.prototype.clearEmailNotifyUserListList = function() {
  return this.setEmailNotifyUserListList([]);
};


/**
 * optional bool email_notify = 4;
 * @return {boolean}
 */
proto.ecos_app.UpdateEmailNotifyRequest.prototype.getEmailNotify = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.UpdateEmailNotifyRequest} returns this
 */
proto.ecos_app.UpdateEmailNotifyRequest.prototype.setEmailNotify = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.UpdateEmailNotifyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.UpdateEmailNotifyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.UpdateEmailNotifyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.UpdateEmailNotifyReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.UpdateEmailNotifyReply}
 */
proto.ecos_app.UpdateEmailNotifyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.UpdateEmailNotifyReply;
  return proto.ecos_app.UpdateEmailNotifyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.UpdateEmailNotifyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.UpdateEmailNotifyReply}
 */
proto.ecos_app.UpdateEmailNotifyReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.UpdateEmailNotifyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.UpdateEmailNotifyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.UpdateEmailNotifyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.UpdateEmailNotifyReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.CheckAppTriggerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.CheckAppTriggerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.CheckAppTriggerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.CheckAppTriggerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    triggerApplicationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.CheckAppTriggerRequest}
 */
proto.ecos_app.CheckAppTriggerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.CheckAppTriggerRequest;
  return proto.ecos_app.CheckAppTriggerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.CheckAppTriggerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.CheckAppTriggerRequest}
 */
proto.ecos_app.CheckAppTriggerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerApplicationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.CheckAppTriggerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.CheckAppTriggerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.CheckAppTriggerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.CheckAppTriggerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTriggerApplicationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string application_ID = 1;
 * @return {string}
 */
proto.ecos_app.CheckAppTriggerRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CheckAppTriggerRequest} returns this
 */
proto.ecos_app.CheckAppTriggerRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string trigger_application_ID = 2;
 * @return {string}
 */
proto.ecos_app.CheckAppTriggerRequest.prototype.getTriggerApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CheckAppTriggerRequest} returns this
 */
proto.ecos_app.CheckAppTriggerRequest.prototype.setTriggerApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.ecos_app.CheckAppTriggerRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.CheckAppTriggerRequest} returns this
 */
proto.ecos_app.CheckAppTriggerRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.CheckAppTriggerReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.CheckAppTriggerReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.CheckAppTriggerReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.CheckAppTriggerReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.CheckAppTriggerReply}
 */
proto.ecos_app.CheckAppTriggerReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.CheckAppTriggerReply;
  return proto.ecos_app.CheckAppTriggerReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.CheckAppTriggerReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.CheckAppTriggerReply}
 */
proto.ecos_app.CheckAppTriggerReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.CheckAppTriggerReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.CheckAppTriggerReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.CheckAppTriggerReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.CheckAppTriggerReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.IsAdminRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.IsAdminRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.IsAdminRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.IsAdminRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.IsAdminRequest}
 */
proto.ecos_app.IsAdminRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.IsAdminRequest;
  return proto.ecos_app.IsAdminRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.IsAdminRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.IsAdminRequest}
 */
proto.ecos_app.IsAdminRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.IsAdminRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.IsAdminRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.IsAdminRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.IsAdminRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.IsAdminReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.IsAdminReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.IsAdminReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.IsAdminReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    admin: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.IsAdminReply}
 */
proto.ecos_app.IsAdminReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.IsAdminReply;
  return proto.ecos_app.IsAdminReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.IsAdminReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.IsAdminReply}
 */
proto.ecos_app.IsAdminReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAdmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.IsAdminReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.IsAdminReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.IsAdminReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.IsAdminReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdmin();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool admin = 1;
 * @return {boolean}
 */
proto.ecos_app.IsAdminReply.prototype.getAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.IsAdminReply} returns this
 */
proto.ecos_app.IsAdminReply.prototype.setAdmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.FavoriteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.FavoriteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.FavoriteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.FavoriteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.FavoriteRequest}
 */
proto.ecos_app.FavoriteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.FavoriteRequest;
  return proto.ecos_app.FavoriteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.FavoriteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.FavoriteRequest}
 */
proto.ecos_app.FavoriteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.FavoriteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.FavoriteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.FavoriteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.FavoriteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.ecos_app.FavoriteRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.FavoriteRequest} returns this
 */
proto.ecos_app.FavoriteRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.ecos_app.FavoriteRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.FavoriteRequest} returns this
 */
proto.ecos_app.FavoriteRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.FavoriteReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.FavoriteReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.FavoriteReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.FavoriteReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.FavoriteReply}
 */
proto.ecos_app.FavoriteReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.FavoriteReply;
  return proto.ecos_app.FavoriteReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.FavoriteReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.FavoriteReply}
 */
proto.ecos_app.FavoriteReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.FavoriteReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.FavoriteReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.FavoriteReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.FavoriteReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.UnFavoriteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.UnFavoriteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.UnFavoriteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.UnFavoriteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.UnFavoriteRequest}
 */
proto.ecos_app.UnFavoriteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.UnFavoriteRequest;
  return proto.ecos_app.UnFavoriteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.UnFavoriteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.UnFavoriteRequest}
 */
proto.ecos_app.UnFavoriteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.UnFavoriteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.UnFavoriteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.UnFavoriteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.UnFavoriteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.ecos_app.UnFavoriteRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.UnFavoriteRequest} returns this
 */
proto.ecos_app.UnFavoriteRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.ecos_app.UnFavoriteRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.UnFavoriteRequest} returns this
 */
proto.ecos_app.UnFavoriteRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.UnFavoriteReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.UnFavoriteReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.UnFavoriteReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.UnFavoriteReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.UnFavoriteReply}
 */
proto.ecos_app.UnFavoriteReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.UnFavoriteReply;
  return proto.ecos_app.UnFavoriteReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.UnFavoriteReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.UnFavoriteReply}
 */
proto.ecos_app.UnFavoriteReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.UnFavoriteReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.UnFavoriteReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.UnFavoriteReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.UnFavoriteReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ListTopicRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ListTopicRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ListTopicRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListTopicRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ListTopicRequest}
 */
proto.ecos_app.ListTopicRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ListTopicRequest;
  return proto.ecos_app.ListTopicRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ListTopicRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ListTopicRequest}
 */
proto.ecos_app.ListTopicRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ListTopicRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ListTopicRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ListTopicRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListTopicRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.ecos_app.ListTopicRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ListTopicRequest} returns this
 */
proto.ecos_app.ListTopicRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.ListTopicReply.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ListTopicReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ListTopicReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ListTopicReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListTopicReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    topicsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    datasetTopic: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ListTopicReply}
 */
proto.ecos_app.ListTopicReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ListTopicReply;
  return proto.ecos_app.ListTopicReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ListTopicReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ListTopicReply}
 */
proto.ecos_app.ListTopicReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTopics(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetTopic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ListTopicReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ListTopicReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ListTopicReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListTopicReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTopicsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getDatasetTopic();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.ecos_app.ListTopicReply.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ListTopicReply} returns this
 */
proto.ecos_app.ListTopicReply.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string topics = 2;
 * @return {!Array<string>}
 */
proto.ecos_app.ListTopicReply.prototype.getTopicsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.ListTopicReply} returns this
 */
proto.ecos_app.ListTopicReply.prototype.setTopicsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ListTopicReply} returns this
 */
proto.ecos_app.ListTopicReply.prototype.addTopics = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ListTopicReply} returns this
 */
proto.ecos_app.ListTopicReply.prototype.clearTopicsList = function() {
  return this.setTopicsList([]);
};


/**
 * optional string dataset_topic = 3;
 * @return {string}
 */
proto.ecos_app.ListTopicReply.prototype.getDatasetTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.ListTopicReply} returns this
 */
proto.ecos_app.ListTopicReply.prototype.setDatasetTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ListQueueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ListQueueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ListQueueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListQueueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ListQueueRequest}
 */
proto.ecos_app.ListQueueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ListQueueRequest;
  return proto.ecos_app.ListQueueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ListQueueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ListQueueRequest}
 */
proto.ecos_app.ListQueueRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ListQueueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ListQueueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ListQueueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListQueueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.ListQueueReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.ListQueueReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.ListQueueReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.ListQueueReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListQueueReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    queuesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.ListQueueReply}
 */
proto.ecos_app.ListQueueReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.ListQueueReply;
  return proto.ecos_app.ListQueueReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.ListQueueReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.ListQueueReply}
 */
proto.ecos_app.ListQueueReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addQueues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.ListQueueReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.ListQueueReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.ListQueueReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.ListQueueReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQueuesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string queues = 1;
 * @return {!Array<string>}
 */
proto.ecos_app.ListQueueReply.prototype.getQueuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ecos_app.ListQueueReply} returns this
 */
proto.ecos_app.ListQueueReply.prototype.setQueuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.ListQueueReply} returns this
 */
proto.ecos_app.ListQueueReply.prototype.addQueues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.ListQueueReply} returns this
 */
proto.ecos_app.ListQueueReply.prototype.clearQueuesList = function() {
  return this.setQueuesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.EmailUnsubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.EmailUnsubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.EmailUnsubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.EmailUnsubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    executionId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.EmailUnsubscribeRequest}
 */
proto.ecos_app.EmailUnsubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.EmailUnsubscribeRequest;
  return proto.ecos_app.EmailUnsubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.EmailUnsubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.EmailUnsubscribeRequest}
 */
proto.ecos_app.EmailUnsubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.EmailUnsubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.EmailUnsubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.EmailUnsubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.EmailUnsubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExecutionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string UID = 1;
 * @return {string}
 */
proto.ecos_app.EmailUnsubscribeRequest.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.EmailUnsubscribeRequest} returns this
 */
proto.ecos_app.EmailUnsubscribeRequest.prototype.setUid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string execution_ID = 2;
 * @return {string}
 */
proto.ecos_app.EmailUnsubscribeRequest.prototype.getExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.EmailUnsubscribeRequest} returns this
 */
proto.ecos_app.EmailUnsubscribeRequest.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.EmailUnsubscribeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.EmailUnsubscribeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.EmailUnsubscribeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.EmailUnsubscribeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.EmailUnsubscribeReply}
 */
proto.ecos_app.EmailUnsubscribeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.EmailUnsubscribeReply;
  return proto.ecos_app.EmailUnsubscribeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.EmailUnsubscribeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.EmailUnsubscribeReply}
 */
proto.ecos_app.EmailUnsubscribeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.EmailUnsubscribeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.EmailUnsubscribeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.EmailUnsubscribeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.EmailUnsubscribeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.GetUnSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.GetUnSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.GetUnSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.GetUnSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    appid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.GetUnSubscribeRequest}
 */
proto.ecos_app.GetUnSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.GetUnSubscribeRequest;
  return proto.ecos_app.GetUnSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.GetUnSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.GetUnSubscribeRequest}
 */
proto.ecos_app.GetUnSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.GetUnSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.GetUnSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.GetUnSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.GetUnSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAppid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string UID = 1;
 * @return {string}
 */
proto.ecos_app.GetUnSubscribeRequest.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.GetUnSubscribeRequest} returns this
 */
proto.ecos_app.GetUnSubscribeRequest.prototype.setUid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string appID = 2;
 * @return {string}
 */
proto.ecos_app.GetUnSubscribeRequest.prototype.getAppid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.GetUnSubscribeRequest} returns this
 */
proto.ecos_app.GetUnSubscribeRequest.prototype.setAppid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.unSubscriptionMail.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.unSubscriptionMail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.unSubscriptionMail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.unSubscriptionMail.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    appid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    handler: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createtime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    updatetime: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.unSubscriptionMail}
 */
proto.ecos_app.unSubscriptionMail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.unSubscriptionMail;
  return proto.ecos_app.unSubscriptionMail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.unSubscriptionMail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.unSubscriptionMail}
 */
proto.ecos_app.unSubscriptionMail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHandler(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatetime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatetime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.unSubscriptionMail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.unSubscriptionMail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.unSubscriptionMail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.unSubscriptionMail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAppid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getHandler();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatetime();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUpdatetime();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string UID = 1;
 * @return {string}
 */
proto.ecos_app.unSubscriptionMail.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.unSubscriptionMail} returns this
 */
proto.ecos_app.unSubscriptionMail.prototype.setUid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string appID = 2;
 * @return {string}
 */
proto.ecos_app.unSubscriptionMail.prototype.getAppid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.unSubscriptionMail} returns this
 */
proto.ecos_app.unSubscriptionMail.prototype.setAppid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool active = 3;
 * @return {boolean}
 */
proto.ecos_app.unSubscriptionMail.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ecos_app.unSubscriptionMail} returns this
 */
proto.ecos_app.unSubscriptionMail.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string handler = 4;
 * @return {string}
 */
proto.ecos_app.unSubscriptionMail.prototype.getHandler = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.unSubscriptionMail} returns this
 */
proto.ecos_app.unSubscriptionMail.prototype.setHandler = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 createTime = 5;
 * @return {number}
 */
proto.ecos_app.unSubscriptionMail.prototype.getCreatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.unSubscriptionMail} returns this
 */
proto.ecos_app.unSubscriptionMail.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 updateTime = 6;
 * @return {number}
 */
proto.ecos_app.unSubscriptionMail.prototype.getUpdatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ecos_app.unSubscriptionMail} returns this
 */
proto.ecos_app.unSubscriptionMail.prototype.setUpdatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ecos_app.GetUnSubscribeReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.GetUnSubscribeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.GetUnSubscribeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.GetUnSubscribeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.GetUnSubscribeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.ecos_app.unSubscriptionMail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.GetUnSubscribeReply}
 */
proto.ecos_app.GetUnSubscribeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.GetUnSubscribeReply;
  return proto.ecos_app.GetUnSubscribeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.GetUnSubscribeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.GetUnSubscribeReply}
 */
proto.ecos_app.GetUnSubscribeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ecos_app.unSubscriptionMail;
      reader.readMessage(value,proto.ecos_app.unSubscriptionMail.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.GetUnSubscribeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.GetUnSubscribeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.GetUnSubscribeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.GetUnSubscribeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ecos_app.unSubscriptionMail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated unSubscriptionMail data = 1;
 * @return {!Array<!proto.ecos_app.unSubscriptionMail>}
 */
proto.ecos_app.GetUnSubscribeReply.prototype.getDataList = function() {
  return /** @type{!Array<!proto.ecos_app.unSubscriptionMail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ecos_app.unSubscriptionMail, 1));
};


/**
 * @param {!Array<!proto.ecos_app.unSubscriptionMail>} value
 * @return {!proto.ecos_app.GetUnSubscribeReply} returns this
*/
proto.ecos_app.GetUnSubscribeReply.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ecos_app.unSubscriptionMail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ecos_app.unSubscriptionMail}
 */
proto.ecos_app.GetUnSubscribeReply.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ecos_app.unSubscriptionMail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ecos_app.GetUnSubscribeReply} returns this
 */
proto.ecos_app.GetUnSubscribeReply.prototype.clearDataList = function() {
  return this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.EmailReSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.EmailReSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.EmailReSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.EmailReSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    executionId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.EmailReSubscribeRequest}
 */
proto.ecos_app.EmailReSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.EmailReSubscribeRequest;
  return proto.ecos_app.EmailReSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.EmailReSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.EmailReSubscribeRequest}
 */
proto.ecos_app.EmailReSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.EmailReSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.EmailReSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.EmailReSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.EmailReSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExecutionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string UID = 1;
 * @return {string}
 */
proto.ecos_app.EmailReSubscribeRequest.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.EmailReSubscribeRequest} returns this
 */
proto.ecos_app.EmailReSubscribeRequest.prototype.setUid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string execution_ID = 2;
 * @return {string}
 */
proto.ecos_app.EmailReSubscribeRequest.prototype.getExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ecos_app.EmailReSubscribeRequest} returns this
 */
proto.ecos_app.EmailReSubscribeRequest.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ecos_app.EmailReSubscribeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ecos_app.EmailReSubscribeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ecos_app.EmailReSubscribeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.EmailReSubscribeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ecos_app.EmailReSubscribeReply}
 */
proto.ecos_app.EmailReSubscribeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ecos_app.EmailReSubscribeReply;
  return proto.ecos_app.EmailReSubscribeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ecos_app.EmailReSubscribeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ecos_app.EmailReSubscribeReply}
 */
proto.ecos_app.EmailReSubscribeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ecos_app.EmailReSubscribeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ecos_app.EmailReSubscribeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ecos_app.EmailReSubscribeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ecos_app.EmailReSubscribeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.ecos_app);
