# encoding: utf-8

"""
Utilities for projects

authors: raphael.marvie@beta.gouv.fr,guillaume.libersat@beta.gouv.fr
created: <2021-09-13 lun. 15:38>

"""

import uuid

from django.core.exceptions import PermissionDenied


def can_administrate_project(project, user, allow_draft=False):
    """Check if user is allowed to administrate this project"""
    if user.is_anonymous:
        return False

    return (
        ((user.email == project.email) or (user.email in project.emails))
        and ((not project.is_draft) or allow_draft)  # noqa: F841
    ) or user.is_staff


def can_administrate_or_403(project, user, allow_draft=False):
    """Raise a 403 error is user is not a owner or admin"""
    if can_administrate_project(project, user, allow_draft=allow_draft):
        return True

    raise PermissionDenied("L'information demandée n'est pas disponible")


def generate_ro_key():
    """Generate the ReadOnly key for sharing"""
    return uuid.uuid4().hex
