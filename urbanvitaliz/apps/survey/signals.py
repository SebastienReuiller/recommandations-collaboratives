import django.dispatch
from actstream import action
from django.dispatch import receiver
from urbanvitaliz import verbs

survey_session_started = django.dispatch.Signal()

survey_session_updated = django.dispatch.Signal()

# FIXME not covered by a test

@receiver(survey_session_started)
def log_survey_started(sender, survey, project, request, **kwargs):
    if project.status == "DRAFT" or project.muted:
        return

    if not request.user.is_staff:
        action.send(
            request.user,
            verb=verbs.Survey.STARTED,
            action_object=survey,
            target=project,
        )
