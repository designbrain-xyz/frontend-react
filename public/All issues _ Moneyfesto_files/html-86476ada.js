function e(){import("data:text/javascript,")}import{s as t}from"./nivo-656b3ee0.js";import{o as r,M as o,E as s,a as n,P as a,U as i,L as p,I as c,b as l,C as u,D as _,R as d,O as y,c as g,d as h,T as m,e as b,A as I,f as T,g as E,n as f,h as v,J as O,i as R,j as S,S as A,k as P,l as C,B as L,s as D,m as j,G as w,p as U,q as N,r as k,t as V,u as x,v as H,w as W,x as z,y as B,z as G,F as M,H as F,N as K,K as Y,Q as q,V as Q,W as J,X as $,Y as X,Z,_ as ee,$ as te,a0 as re,a1 as oe,a2 as se,a3 as ne,a4 as ae,a5 as ie,a6 as pe,a7 as ce,a8 as le,a9 as ue,aa as _e,ab as de,ac as ye,ad as ge,ae as he,af as me,ag as be,ah as Ie,ai as Te,aj as Ee,ak as fe}from"./Favorite-243de339.js";import{I as ve,_ as Oe}from"./IssueDraft-785122de.js";import{R as Re,I as Se,a as Ae,P as Pe}from"./ProjectLink-6cfe034c.js";import{I as Ce}from"./IntegrationTemplate-14ba8ff8.js";import{w as Le}from"./vendor-core-ba373b1b.js";import"./prosemirror-3b085249.js";import"./BlockedByIssueIcon-fc77a5ce.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}(),Array.prototype.distinct=function(){return this.filter(((e,t,r)=>r.indexOf(e)===t))},Array.prototype.concrete=function(){return this.filter((e=>void 0!==e))},Array.prototype.groupBy=function(e,t){const r=new Map;for(const o of this){const t=o[e],s=r.get(t);s?s.push(o):r.set(t,[o])}if(t){const e=[...r.keys()].sortBy(t),o=new Map;for(const t of e)o.set(t,r.get(t));return o}return r},Array.prototype.orderBy=function(e,t){return r(this,e,t)},Array.prototype.sortBy=function(e){return t(this,e)},String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},String.prototype.deCapitalize=function(){return this.charAt(0).toLowerCase()+this.slice(1)},String.prototype.toQuestion=function(){const e=this.replace(/(\.|,|:)$/,"");return e.lastIndexOf("?")!==e.length-1?e+"?":e},process.env={VITE_API_SERVER_URL:"https://client-api.linear.app",VITE_ASSET_URL:"https://static.linear.app/client",VITE_CLIENT_URL:"https://linear.app",VITE_ANALYTICS_URL:"https://e.linear.app",VITE_DISCORD_OAUTH_CLIENT_ID:"957060182561669132",VITE_DISCORD_OAUTH_REDIRECT_URL:"https://linear.app/connect/discord/callback",VITE_FIGMA_OAUTH_CLIENT_ID:"STbJqWt09xEGg40Xij0i59",VITE_FIGMA_OAUTH_REDIRECT_URL:"https://linear.app/connect/figma/callback",VITE_GITHUB_APP_URL:"https://github.com/apps/linear/installations/new",VITE_GITHUB_ACCOUNT_LINK_OAUTH_REDIRECT_URL:"https://linear.app/connect/github-account/callback",VITE_GITHUB_ACCOUNT_LINK_OAUTH_CLIENT_ID:"54e0d90930c16c752021",VITE_GITHUB_IMPORTER_OAUTH_REDIRECT_URL:"https://linear.app/connect/github-importer/callback",VITE_GITHUB_IMPORTER_OAUTH_CLIENT_ID:"3b1183f019114a87136f",VITE_GOOGLE_OAUTH_CLIENT_ID:"463717515632-5f96ed9uaue5p206umg9toffdbfmsfbm.apps.googleusercontent.com",VITE_GOOGLE_OAUTH_REDIRECT_URL:"https://linear.app/auth/google/callback",VITE_GOOGLE_SHEETS_REDIRECT_URL:"https://linear.app/connect/google/callback",VITE_GOOGLE_CALENDAR_REDIRECT_URL:"https://linear.app/connect/google/callback",VITE_GRAPHQL_ADMIN_SERVER_HTTP:"https://admin-api.linear.app/graphql",VITE_GRAPHQL_SERVER_HTTP:"https://client-api.linear.app/graphql",VITE_INTERCOM_OAUTH_CLIENT_ID:"56c76476-e15f-425d-9de1-2f60ebcb3370",VITE_NOTION_INTERNAL_OAUTH_CLIENT_ID:"dd7bac7615ab5b83e6093725b56c42ce",VITE_FIGMA_INTERNAL_OAUTH_CLIENT_ID:"a68faaa3f27a017c4b067874c86773e4",VITE_PUSH_MESSAGE_VAPID_PUBLIC_KEY:"BGmzp5YJU9nt-dFhX-jQvi9Ch-ROVsxrK1AqWOsRmPE6zFY6zg4qcln3P_3EsH9M1pddJEGXeK326zp1MSPlNIQ",VITE_SANITY_PROJECT_ID:"ornj730p",VITE_SENTRY_DSN:"https://f172c25063bf4e3492ece32b840ab90b@s.linear.app/5337513",VITE_SENTRY_INTEGRATION_APP_NAME:"linear",VITE_SLACK_CLIENT_ID:"328068080260.497819820514",VITE_SLACK_INTAKE_APP_CLIENT_ID:"328068080260.4867786112663",VITE_ZENDESK_OAUTH_CLIENT_ID:"zdg-linear",VITE_ZENDESK_OAUTH_REDIRECT_URL:"https://linear.app/connect/zendesk/callback",VITE_ZENDESK_INTERNAL_OAUTH_CLIENT_ID:"f5961297b58e81fa7f2e8b2bf36a41bc",VITE_FRONT_INTERNAL_OAUTH_CLIENT_ID:"1cb4cbf677a40183f0dc8a178e7d049d",VITE_FRONT_OAUTH_CLIENT_ID:"358600cf7be06c253af8",VITE_FRONT_OAUTH_REDIRECT_URL:"https://linear.app/connect/front/callback",VITE_SOCKET_SERVER_URL:"wss://sync.linear.app",VITE_STRIPE_PUBLIC_KEY:"pk_live_DIFLzeTR6Mm4NO6AWaQZ0erl",VITE_UPLOAD_DOWNLOAD_URL:"https://uploads.linear.app",VITE_POSTHOG_WRITE_KEY:"phc_PaCjzqaetuAlYgXjb0uftDOw8QzOmXfWIbD7nkaYrjr",VITE_BUILD_REVISION:"11206",VITE_USER_NODE_ENV:"production",BASE_URL:"https://static.linear.app/client/",MODE:"production",DEV:!1,PROD:!0};var De=Object.defineProperty,je=Object.getOwnPropertyDescriptor,we=(e,t,r,o)=>{for(var s,n=o>1?void 0:o?je(t,r):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&De(t,r,n),n};let Ue=class extends o{matchInlineFind(e){var t,r;return!!(null==(r=null==(t=this.issue)?void 0:t.value)?void 0:r.matchInlineFind(e))||this.events.some((t=>{if("issueTitle"in t&&t.issueTitle.toLowerCase().includes(e))return!0;if("commentText"in t&&t.commentText.toLowerCase().includes(e))return!0;if("reactions"in t){const r=s.findNativeBySymbol(e);if(t.reactions.some((t=>t.emoji.toLowerCase().includes(e)||r&&t.emoji.toLowerCase().includes(r.name))))return!0}return!1}))}};we([n((()=>i),"activities",{persistance:a.none,nullable:!1,indexed:!0})],Ue.prototype,"user",2),we([p((()=>c),"activities",{persistance:a.none,nullable:!0,indexed:!0})],Ue.prototype,"issue",2),we([l()],Ue.prototype,"issueId",2),we([l()],Ue.prototype,"events",2),Ue=we([u("Activity")],Ue);var Ne=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,Ve=(e,t,r,o)=>{for(var s,n=o>1?void 0:o?ke(t,r):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&Ne(t,r,n),n};let xe=class extends _{constructor(e=!0){super(e),this.newlyCreated=!1,this.label="",e&&this.makeObservable()}};Ve([l()],xe.prototype,"label",2),Ve([l({persistance:a.createOnly})],xe.prototype,"key",2),Ve([n((()=>i),"apiKeys",{persistance:a.none,nullable:!1})],xe.prototype,"user",2),xe=Ve([u("ApiKey")],xe);var He=Object.defineProperty,We=Object.getOwnPropertyDescriptor,ze=(e,t,r,o)=>{for(var s,n=o>1?void 0:o?We(t,r):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&He(t,r,n),n};let Be=class extends _{constructor(e=!0){super(e),e&&this.makeObservable()}};ze([l()],Be.prototype,"name",2),ze([l()],Be.prototype,"url",2),ze([l({persistance:a.none})],Be.prototype,"source",2),ze([d((()=>i),{persistance:a.none,nullable:!0})],Be.prototype,"creator",2),ze([n((()=>y),"emojis",{nullable:!1})],Be.prototype,"organization",2),Be=ze([u("Emoji")],Be);var Ge=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,Fe=(e,t,r,o)=>{for(var s,n=o>1?void 0:o?Me(t,r):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&Ge(t,r,n),n};let Ke=class extends _{constructor(e=!0){super(e),e&&this.makeObservable()}isProjectIntegrationsSettings(){return Boolean(this.project)}isTeamIntegrationsSettings(){return Boolean(this.team)}};Fe([g((()=>h),"integrationsSettings",{nullable:!0})],Ke.prototype,"project",2),Fe([g((()=>m),"integrationsSettings",{nullable:!0})],Ke.prototype,"team",2),Fe([l()],Ke.prototype,"slackIssueCreated",2),Fe([l()],Ke.prototype,"slackIssueNewComment",2),Fe([l()],Ke.prototype,"slackIssueStatusChangedDone",2),Fe([l()],Ke.prototype,"slackIssueStatusChangedAll",2),Fe([l()],Ke.prototype,"slackProjectUpdateCreated",2),Fe([l()],Ke.prototype,"slackProjectUpdateCreatedToTeam",2),Fe([l()],Ke.prototype,"slackProjectUpdateCreatedToWorkspace",2),Fe([l()],Ke.prototype,"slackIssueAddedToTriage",2),Fe([l()],Ke.prototype,"slackIssueSlaHighRisk",2),Fe([l()],Ke.prototype,"slackIssueSlaBreached",2),Ke=Fe([u("IntegrationsSettings")],Ke);var Ye=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Qe=(e,t,r,o)=>{for(var s,n=o>1?void 0:o?qe(t,r):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&Ye(t,r,n),n};let Je=class extends I{constructor(e=!0){super(e),this.webhookResourceTypes=[],e&&this.makeObservable()}rotateSecret(){if(this.store)return async function(e,t){const r=b.gql`
    mutation OauthClientRotateSecret($id: String!) {
      oauthClientRotateSecret(id: $id) {
        success
      }
    }
  `;return e.mutate(r,t)}(this.store.graphQLClient,{id:this.id})}};Qe([l()],Je.prototype,"clientId",2),Qe([l()],Je.prototype,"clientSecret",2),Qe([l()],Je.prototype,"name",2),Qe([l()],Je.prototype,"description",2),Qe([l()],Je.prototype,"developer",2),Qe([l()],Je.prototype,"developerUrl",2),Qe([l()],Je.prototype,"imageUrl",2),Qe([l()],Je.prototype,"redirectUris",2),Qe([l()],Je.prototype,"publicEnabled",2),Qe([n((()=>y),"oauthClients",{nullable:!1})],Je.prototype,"organization",2),Qe([l()],Je.prototype,"webhookResourceTypes",2),Qe([l()],Je.prototype,"webhookUrl",2),Qe([l()],Je.prototype,"webhookSecret",2),Je=Qe([u("OauthClient")],Je);var $e=(e=>(e.saml="saml",e.general="general",e))($e||{}),Xe=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,et=(e,t,r,o)=>{for(var s,n=o>1?void 0:o?Ze(t,r):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&Xe(t,r,n),n};let tt=class extends _{constructor(e=!0){super(e),this.verified=!1,this.claimed=!1,this.authType=$e.general,e&&this.makeObservable()}save(e=!1,t){return super.save(e,t)}};et([l()],tt.prototype,"name",2),et([l({persistance:a.none})],tt.prototype,"verified",2),et([l({persistance:a.none})],tt.prototype,"claimed",2),et([n((()=>y),"domains",{nullable:!1})],tt.prototype,"organization",2),et([d((()=>i),{persistance:a.none,nullable:!1})],tt.prototype,"creator",2),et([l()],tt.prototype,"verificationEmail",2),et([l()],tt.prototype,"authType",2),tt=et([u("OrganizationDomain")],tt);var rt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,st=(e,t,r,o)=>{for(var s,n=o>1?void 0:o?ot(t,r):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&rt(t,r,n),n};let nt=class extends _{constructor(e=!0){super(e),this.email="",this.teams=new T,e&&this.makeObservable()}get isUsed(){return void 0!==this.invitee}get isAdmin(){return this.role===E.admin}get isGuest(){return this.role===E.guest}delete(){return super.delete()}get roleLabel(){switch(this.role){case E.admin:return"Admin";case E.guest:return"Guest";case E.user:return"Member";default:throw f(this.role)}}};st([l()],nt.prototype,"email",2),st([l({enum:E})],nt.prototype,"role",2),st([d((()=>i),{nullable:!1})],nt.prototype,"invitee",2),st([d((()=>i),{nullable:!1})],nt.prototype,"inviter",2),st([v((()=>m))],nt.prototype,"teams",2),st([n((()=>y),"invites",{nullable:!1})],nt.prototype,"organization",2),nt=st([u("OrganizationInvite")],nt);var at=Object.defineProperty,it=Object.getOwnPropertyDescriptor,pt=(e,t,r,o)=>{for(var s,n=o>1?void 0:o?it(t,r):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&at(t,r,n),n};let ct=class extends _{constructor(e=!0){super(e),e&&this.makeObservable()}};pt([n((()=>i),"personalNotes",{nullable:!1})],ct.prototype,"user",2),pt([l({serializer:O,shallowObservation:!0})],ct.prototype,"contentData",2),ct=pt([u("PersonalNote")],ct);var lt=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,_t=(e,t,r,o)=>{for(var s,n=o>1?void 0:o?ut(t,r):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&lt(t,r,n),n};let dt=class extends _{constructor(e=!0){super(e),e&&this.makeObservable()}};_t([g((()=>R),"interaction",{nullable:!1,indexed:!0})],dt.prototype,"projectUpdate",2),_t([d((()=>i),{nullable:!1})],dt.prototype,"user",2),_t([l({serializer:S})],dt.prototype,"readAt",2),dt=_t([u("ProjectUpdateInteraction")],dt);var yt=(e=>(e.active="active",e.canceled="canceled",e.incomplete="incomplete",e.incompleteExpired="incomplete_expired",e.pastDue="past_due",e.trialing="trialing",e.unpaid="unpaid",e))(yt||{});class gt{static isActiveStatus(e){return this.activeStatuses.includes(e)}static displayName(e){switch(e){case"active":return"Active";case"canceled":return"Canceled";case"incomplete":return"Incomplete";case"incomplete_expired":return"Expired";case"past_due":return"Past due";case"trialing":return"Trialing";case"unpaid":return"Unpaid";default:return"Unknown"}}}gt.activeStatuses=["active","past_due","trialing"];var ht=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,bt=(e,t,r,o)=>{for(var s,n=o>1?void 0:o?mt(t,r):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&ht(t,r,n),n};let It=class extends I{constructor(e=!0){super(e),e&&this.makeObservable()}get quantity(){return Math.max(this.seatsMinimum||0,this.seats)}get isActive(){return!this.archivedAt&&gt.isActiveStatus(this.stripeStatus)}get needsAttention(){return!this.archivedAt&&this.stripeStatus===yt.pastDue}get cancelationDate(){if(this.type!==A.free&&this.canceledAt&&this.isActive)return this.billingPeriodEnd}get nextBillingDate(){if(!this.canceledAt&&this.isActive)return this.billingPeriodEnd}isChangePending(e){return!(!this.pendingChangeType||this.pendingChangeType!==e)}canDowngradeTo(e){return e!==this.type&&(e===A.free||P.pricePerSeatForSubscription(this.type)>P.pricePerSeatForSubscription(e))}canUpgradeTo(e){return e!==this.type&&(e!==A.free&&P.pricePerSeatForSubscription(this.type)<P.pricePerSeatForSubscription(e))}get changePending(){return!(!this.cancelationDate&&!this.pendingChangeType)}get details(){return{planType:P.planForSubscription(this.type),billingPeriod:P.billingPeriodForSubscription(this.type),monthlyPrice:P.pricePerSeatForSubscription(this.type),isFriendSubscription:-1!==P.allFriendSubscriptionTypes.indexOf(this.type)||!1}}static get defaultDetails(){return{planType:C.free,monthlyPrice:0,billingPeriod:L.year,isFriendSubscription:!1}}get billingPeriodEnd(){if(this.type===A.free||!this.isActive)return;if(this.nextBillingAt)return this.nextBillingAt;const e=P.billingPeriodForSubscription(this.type)===L.month?"month":"year",t=D(this.createdAt);return new Date(t.add(t.diff(D(),e)+1,e).epoch)}};var Tt;bt([l()],It.prototype,"type",2),bt([l()],It.prototype,"seats",2),bt([l()],It.prototype,"seatsMinimum",2),bt([l()],It.prototype,"pendingChangeType",2),bt([n((()=>y),"subscriptions",{nullable:!1})],It.prototype,"organization",2),bt([l({serializer:S})],It.prototype,"canceledAt",2),bt([l({serializer:S})],It.prototype,"nextBillingAt",2),bt([l({persistance:a.none})],It.prototype,"stripeStatus",2),It=bt([u("Subscription")],It),(e=>{let t;var r;let o;e.maxLabelLength=64,e.signatureKeyLength=44,e.signatureKeyPrefix="lin_wh_",e.maxUrlLength=1e3,e.maxSecretLength=256,e.disallowedHosts=/((^127|^10)(\.[0-9]{1,3}){3})|(^((172\.1[6-9])|(172\.2[0-9])|(172\.3[0-1]))(\.[0-9]{1,3}){2})|(^192\.168(\.[0-9]{1,3}){2})|(^(.*\.)?linear\.app)/i,(r=t=e.EntityResourceType||(e.EntityResourceType={})).Issue="Issue",r.Comment="Comment",r.Attachment="Attachment",r.Reaction="Reaction",r.Project="Project",r.ProjectUpdate="ProjectUpdate",r.Cycle="Cycle",r.IssueLabel="IssueLabel",(o=e.CustomResourceType||(e.CustomResourceType={})).IssueSLA="IssueSLA",e.entityResourceTypes=Object.values(t),e.customResourceTypes=Object.values(o),e.resourceTypes=[...e.entityResourceTypes,...e.customResourceTypes],e.labelForResourceType=e=>{switch(e){case"Issue":return"Issues";case"Comment":return"Issue comments";case"Attachment":return"Issue attachments";case"Reaction":return"Emoji reactions";case"IssueLabel":return"Labels";case"Project":return"Projects";case"ProjectUpdate":return"Project updates";case"Cycle":return"Cycles";case"IssueSLA":return"Issue SLA";default:throw new j(e)}}})(Tt||(Tt={}));var Et=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,vt=(e,t,r,o)=>{for(var s,n=o>1?void 0:o?ft(t,r):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&Et(t,r,n),n};let Ot=class extends _{constructor(e=!0){super(e),this.enabled=!0,this.resourceTypes=[Tt.EntityResourceType.Issue],this.allPublicTeams=!1,e&&this.makeObservable()}};vt([l()],Ot.prototype,"label",2),vt([l()],Ot.prototype,"url",2),vt([l()],Ot.prototype,"enabled",2),vt([l()],Ot.prototype,"secret",2),vt([d((()=>i),{persistance:a.none,nullable:!1})],Ot.prototype,"creator",2),vt([l()],Ot.prototype,"resourceTypes",2),vt([n((()=>y),"webhooks",{nullable:!1})],Ot.prototype,"organization",2),vt([l()],Ot.prototype,"allPublicTeams",2),vt([n((()=>m),"webhooks",{nullable:!0})],Ot.prototype,"team",2),Ot=vt([u("Webhook")],Ot);var Rt=(e=>(e.sla="sla",e.custom="custom",e))(Rt||{}),St=(e=>(e.entityCreated="entityCreated",e.entityUpdated="entityUpdated",e.entityCreatedOrUpdated="entityCreatedOrUpdated",e.entityRemoved="entityRemoved",e.entityUnarchived="entityUnarchived",e))(St||{}),At=(e=>(e.issue="Issue",e.project="Project",e))(At||{});class Pt{}Pt.maxNameLength=64,Pt.maxGroupNameLength=64,Pt.maxDescriptionLength=255,Pt.maxConditionCount=8,Pt.maxActivityCount=8,Pt.allowedIssueFilterKeysInCondition=["team","state","assignee","creator","priority","labels","project"];var Ct=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,Dt=(e,t,r,o)=>{for(var s,n=o>1?void 0:o?Lt(t,r):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&Ct(t,r,n),n};let jt=class extends _{constructor(e=!0){super(e),this.enabled=!1,this.activities=[],this.sortOrder=0,e&&this.makeObservable()}get isTeamWorkflow(){return!!this.team}};Dt([l()],jt.prototype,"name",2),Dt([l()],jt.prototype,"groupName",2),Dt([l()],jt.prototype,"description",2),Dt([l({enum:Rt})],jt.prototype,"type",2),Dt([l({enum:St})],jt.prototype,"trigger",2),Dt([l({enum:At})],jt.prototype,"triggerType",2),Dt([l({serializer:w})],jt.prototype,"conditions",2),Dt([l()],jt.prototype,"enabled",2),Dt([l({serializer:w})],jt.prototype,"activities",2),Dt([l({serializer:O})],jt.prototype,"schedule",2),Dt([n((()=>y),"allWorkflowDefinitions",{nullable:!1,persistance:a.none})],jt.prototype,"organization",2),Dt([n((()=>m),"workflowDefinitions",{nullable:!1})],jt.prototype,"team",2),Dt([d((()=>i),{persistance:a.none,nullable:!1})],jt.prototype,"creator",2),Dt([l()],jt.prototype,"sortOrder",2),jt=Dt([u("WorkflowDefinition")],jt);var wt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,Nt=(e,t,r,o)=>{for(var s,n=o>1?void 0:o?Ut(t,r):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&wt(t,r,n),n};let kt=class extends _{constructor(e=!0){super(e),this.enabled=!1,this.activities=[],this.sortOrder=0,e&&this.makeObservable()}get isTeamWorkflow(){return!!this.team}};Nt([l()],kt.prototype,"name",2),Nt([l()],kt.prototype,"description",2),Nt([l()],kt.prototype,"enabled",2),Nt([l({serializer:w})],kt.prototype,"activities",2),Nt([l({serializer:O})],kt.prototype,"schedule",2),Nt([n((()=>m),"workflowCronJobDefinitions",{nullable:!1})],kt.prototype,"team",2),Nt([d((()=>i),{persistance:a.none,nullable:!1})],kt.prototype,"creator",2),Nt([l()],kt.prototype,"sortOrder",2),kt=Nt([u("WorkflowCronJobDefinition")],kt);const Vt=Object.freeze(Object.defineProperty({__proto__:null,get Activity(){return Ue},get ApiKey(){return xe},get Attachment(){return U},get Comment(){return N},get CustomView(){return k},get Cycle(){return V},get Document(){return x},get Roadmap(){return H},get RoadmapToProject(){return Re},get Emoji(){return Be},get IssueImport(){return W},get Integration(){return Se},get IntegrationsSettings(){return Ke},ProjectIntegrationsSettings:class extends Ke{},TeamIntegrationsSettings:class extends Ke{},get Issue(){return c},get IssueDraft(){return ve},IssueHistoryType:z,get IssueHistory(){return B},get IssueLabel(){return G},IssuePriority:M,IssuePrioritySerializer:F,get IssueRelation(){return Ae},get Notification(){return K},IssueNotification:Y,ProjectNotification:q,OauthClientApprovalNotification:Q,get NotificationSubscription(){return J},ProjectNotificationSubscription:$,TeamNotificationSubscription:X,get OauthClient(){return Je},get OauthClientApproval(){return Z},get Organization(){return y},get OrganizationDomain(){return tt},get OrganizationInvite(){return nt},get PersonalNote(){return ct},get Project(){return h},get ProjectMilestone(){return ee},get ProjectLink(){return Pe},get ProjectUpdate(){return R},get ProjectUpdateInteraction(){return dt},get PushSubscription(){return te},get Subscription(){return It},get Team(){return m},get TeamKey(){return re},get TeamMembership(){return oe},get Template(){return se},get User(){return i},PresenceStatus:ne,BROWSER_USER_SETTINGS_KEY:ae,BROWSER_CUSTOM_THEME_COLORS_KEY:ie,BROWSER_THEME_BACKGROUND_COLOR_KEY:pe,BROWSER_THEME_SIDEBAR_COLOR_KEY:ce,ProjectDetailsPaneTab:le,CycleDetailsPaneTab:ue,get UserSettings(){return _e},get Webhook(){return Ot},get WorkflowState(){return de},get IntegrationTemplate(){return Ce},get WorkflowDefinition(){return jt},get WorkflowCronJobDefinition(){return kt},get ViewPreferences(){return ye},get Favorite(){return ge}},Symbol.toStringTag,{value:"Module"}));let xt=!1;let Ht=!0;document.addEventListener("visibilitychange",(()=>{Ht=!document.hidden}),!1),window.addEventListener("focus",(()=>{Ht=!0}),!1),window.addEventListener("blur",(()=>{Ht=!1}),!1);Object.keys(Vt).forEach((e=>{try{new Vt[e]}catch(t){}})),o.store=me(),Le({enforceActions:"never"});const Wt="/client/sw.js"+("undefined"!=typeof SW_HASH&&SW_HASH?`?${SW_HASH}`:"");if("serviceWorker"in navigator){const e=new MessageChannel;e.port1.onmessage=e=>{var t;try{"error"===(null==(t=e.data)?void 0:t.type)&&be.error("Service worker error",e.data.error,e.data.message?{message:e.data.message}:void 0)}catch(r){be.info("Unknown message from service worker",r)}},window.addEventListener("load",(async()=>{navigator.serviceWorker.register(Wt,{scope:"/",type:"module"}).then((e=>{me().pushNotification.setServiceWorkerRegistration(e),Ie().setServiceWorkerRegistration(e)})).then((()=>{var t;null==(t=navigator.serviceWorker.controller)||t.postMessage("init",[e.port2])})).catch((()=>{me().pushNotification.setServiceWorkerRegistration(void 0),Ie().setServiceWorkerRegistration(void 0)}))}))}var zt;(()=>{let e=0,t=0;setInterval((()=>{e+=1,Ht?t=0:t+=1,window.location.href.endsWith("/edit")||e>1440&&t>15&&window.location.reload()}),he.MINUTE)})(),zt=Ee.versionString(fe.BUILD_REVISION),xt||(console.log(`%c${(e=>` __                                               _____          __          __           ______          v${e}\n/\\ \\       __                                    /\\  __\`\\       /\\ \\      __/\\ \\__       /\\__  _\\                       \n\\ \\ \\     /\\_\\    ___      __     __     _ __    \\ \\ \\/\\ \\  _ __\\ \\ \\____/\\_\\ \\ ,_\\      \\/_/\\ \\/     ___     ___       \n \\ \\ \\  __\\/\\ \\ /' _ \`\\  /'__\`\\ /'__\`\\  /\\\`'__\\   \\ \\ \\ \\ \\/\\\`'__\\ \\ '__\`\\/\\ \\ \\ \\/         \\ \\ \\   /' _ \`\\  /'___\\     \n  \\ \\ \\L\\ \\\\ \\ \\/\\ \\/\\ \\/\\  __//\\ \\L\\.\\_\\ \\ \\/     \\ \\ \\_\\ \\ \\ \\/ \\ \\ \\L\\ \\ \\ \\ \\ \\_  __     \\_\\ \\__/\\ \\/\\ \\/\\ \\__/  __ \n   \\ \\____/ \\ \\_\\ \\_\\ \\_\\ \\____\\ \\__/.\\_\\\\ \\_\\      \\ \\_____\\ \\_\\  \\ \\_,__/\\ \\_\\ \\__\\/\\ \\    /\\_____\\ \\_\\ \\_\\ \\____\\/\\_\\\n    \\/___/   \\/_/\\/_/\\/_/\\/____/\\/__/\\/_/ \\/_/       \\/_____/\\/_/   \\/___/  \\/_/\\/__/\\ \\/    \\/_____/\\/_/\\/_/\\/____/\\/_/\n                                                                                      \\/`)(zt)}\n\nBuild products better\n\nWE'RE HIRING: https://linear.app/readme\nCHANGELOG:    https://linear.app/changelog\n`,`\n  font-family: monospace;\n  color: ${void 0!==typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches?"#F7F8F8":"#282A30"};\n  `),xt=!0),Te()&&window.addEventListener("touchmove",(e=>{1!==e.scale&&e.preventDefault()}),{passive:!1}),(()=>{const e=document.createElement("div");e.setAttribute("style","width: 30px; height: 30px; overflow: auto;"),e.classList.add("scrollbar-test");const t=document.createElement("div");t.setAttribute("style","width:100%;height:40px"),e.appendChild(t),document.body.appendChild(e);30-e.firstChild.clientWidth&&document.body.classList.add("layoutScrollbarObtrusive"),document.body.removeChild(e)})(),Oe((()=>import("./Root-2be1c93d.js".replace("./","https://static.linear.app/client/assets/")).then((e=>e.dt))),[]).then((e=>e.default())).catch((e=>{console.log("error,",e)}));export{xe as A,Be as E,$e as O,dt as P,yt as S,Tt as W,e as __vite_legacy_guard,nt as a,ct as b,Je as c,Ot as d,tt as e,kt as f,Rt as g,jt as h,St as i,At as j,Pt as k};
//# sourceMappingURL=html-86476ada.js.map